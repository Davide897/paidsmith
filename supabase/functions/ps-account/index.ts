// Apagar a conta (RGPD, art. 17.º): fotos dos recibos, dados e utilizador. Só o próprio, com sessão válida e o email escrito.
// Ficam apenas os pagamentos confirmados (obrigação fiscal), já sem ligação à conta (FK on delete set null).
import { createClient } from "jsr:@supabase/supabase-js@2";

const ORIGINS = ["https://davide897.github.io", "http://localhost:8765"];
const BUCKET = "inv-receipts";

function cors(req: Request) {
  const o = req.headers.get("origin") || "";
  return {
    "Access-Control-Allow-Origin": ORIGINS.includes(o) ? o : ORIGINS[0],
    "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };
}
const json = (req: Request, body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors(req), "Content-Type": "application/json" } });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors(req) });
  if (req.method !== "POST") return json(req, { error: "method" }, 405);

  const url = Deno.env.get("SUPABASE_URL")!;
  const userClient = createClient(url, Deno.env.get("SUPABASE_ANON_KEY")!, {
    global: { headers: { Authorization: req.headers.get("Authorization") || "" } },
  });
  const { data: { user } } = await userClient.auth.getUser();
  if (!user) return json(req, { error: "unauthorized" }, 401);

  let body: { action?: string; confirm?: string };
  try { body = await req.json(); } catch { return json(req, { error: "bad_request" }, 400); }
  if (body.action !== "delete") return json(req, { error: "bad_request" }, 400);
  if (String(body.confirm || "").trim().toLowerCase() !== String(user.email || "").toLowerCase())
    return json(req, { error: "confirm" }, 400);

  const admin = createClient(url, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const { data: isAdm } = await admin.from("ps_admins").select("user_id").eq("user_id", user.id).maybeSingle();
  if (isAdm) return json(req, { error: "admin" }, 403);

  // N9: só com entrada recente (15 min), para quem encontrar o telemóvel desbloqueado não conseguir apagar a conta
  const { data: fresh } = await admin.auth.admin.getUserById(user.id);
  const last = Date.parse(String(fresh?.user?.last_sign_in_at || ""));
  if (!last || Date.now() - last > 15 * 60 * 1000) return json(req, { error: "reauth" }, 401);

  // 1) ficheiros: tudo o que está em <uid>/..., a qualquer profundidade
  const paths: string[] = [];
  async function walk(prefix: string, depth: number): Promise<void> {
    for (let off = 0; ; off += 1000) {
      const { data, error } = await admin.storage.from(BUCKET).list(prefix, { limit: 1000, offset: off });
      if (error) throw error;
      for (const it of data || []) {
        const p = `${prefix}/${it.name}`;
        if (it.id) paths.push(p); else if (depth < 5) await walk(p, depth + 1);
      }
      if (!data || data.length < 1000) break;
    }
  }
  try {
    await walk(user.id, 0);
    for (let i = 0; i < paths.length; i += 100) {
      const { error } = await admin.storage.from(BUCKET).remove(paths.slice(i, i + 100));
      if (error) throw error;
    }
  } catch (e) {
    console.error("storage", e);
    return json(req, { error: "storage" }, 500);   // nada foi apagado da conta: pode tentar outra vez
  }

  // 2) pedidos de pagamento não confirmados não têm valor fiscal: apagam-se
  const { error: cErr } = await admin.from("ps_payment_claims").delete().eq("user_id", user.id).in("status", ["pending", "rejected", "cancelled"]);   // aprovados e reembolsados ficam (registo fiscal)
  if (cErr) { console.error("claims", cErr); return json(req, { error: "db" }, 500); }

  // M2: o mesmo email não volta a ter período experimental (guarda-se só um hash)
  await admin.rpc("ps_mark_trial_used", { e: user.email || "" });

  // 3) utilizador: o resto (definições, clientes, faturas, despesas, bancos, subscrição, mensagens, uso da IA) cai em cascata
  const { error: uErr } = await admin.auth.admin.deleteUser(user.id);
  if (uErr) { console.error("user", uErr); return json(req, { error: "db" }, 500); }

  return json(req, { ok: true, files: paths.length });
});
