// Avisa o administrador por email quando chega um pagamento por confirmar ou uma mensagem nova.
// Chamado pela base de dados (pg_net) com um segredo partilhado; não aceita chamadas do navegador.
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const ADMIN_EMAIL = "davide_sobral@outlook.pt";
const APP_URL = "https://davide897.github.io/paidsmith/";
const esc = (s: unknown) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

Deno.serve(async (req) => {
  if (req.method !== "POST") return new Response("method", { status: 405 });
  const secret = Deno.env.get("PS_NOTIFY_SECRET") || "";
  if (!secret || req.headers.get("x-ps-secret") !== secret) return new Response("forbidden", { status: 403 });

  let body: { type?: string; record?: Record<string, unknown> };
  try { body = await req.json(); } catch { return new Response("bad", { status: 400 }); }
  const r = body.record || {};
  let subject = "", html = "";
  if (body.type === "claim") {
    subject = `Paidsmith: transferência por confirmar (${r.amount} ${r.currency})`;
    html = `<p><b>${esc(r.email)}</b> comunicou uma transferência.</p>
      <ul><li>Valor: <b>${esc(r.amount)} ${esc(r.currency)}</b></li><li>Período: ${esc(r.months)} mês(es)</li>
      <li>Referência: <b>${esc(r.reference)}</b></li></ul>
      <p>Confirma no Revolut que o valor chegou com esta referência e depois aprova em Definições &gt; Administração.</p>
      <p><a href="${APP_URL}">Abrir a Paidsmith</a></p>`;
  } else if (body.type === "feedback") {
    const kind = ({ bug: "Bug", idea: "Sugestão", question: "Pergunta" } as Record<string, string>)[String(r.kind)] || "Mensagem";
    subject = `Paidsmith: ${kind} de ${r.email}`;
    html = `<p><b>${esc(kind)}</b> de <b>${esc(r.email)}</b>:</p>
      <blockquote style="border-left:3px solid #E7B54E;padding-left:10px;white-space:pre-wrap">${esc(r.message)}</blockquote>
      <p style="color:#777;font-size:12px">${esc(JSON.stringify(r.context || {}))}</p>
      <p><a href="${APP_URL}">Abrir a Paidsmith</a> · Definições &gt; Administração &gt; Mensagens dos utilizadores</p>`;
  } else return new Response("type", { status: 400 });

  const client = new SMTPClient({
    connection: { hostname: "smtp-relay.brevo.com", port: 465, tls: true,
      auth: { username: Deno.env.get("BREVO_SMTP_LOGIN")!, password: Deno.env.get("BREVO_SMTP_KEY")! } },
  });
  try {
    await client.send({ from: `Paidsmith <${Deno.env.get("BREVO_SENDER_EMAIL")}>`, to: ADMIN_EMAIL, subject, html,
      content: html.replace(/<[^>]+>/g, "") });
  } catch (e) {
    return new Response("smtp: " + String(e).slice(0, 200), { status: 502 });
  } finally { try { await client.close(); } catch (_) { /* nada */ } }
  return new Response("ok");
});
