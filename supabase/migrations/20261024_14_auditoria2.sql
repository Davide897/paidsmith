-- Segunda auditoria (2026-10-24)

-- N3: versão por registo. O cliente envia a versão que conhece (rev); o servidor recusa se o registo
-- entretanto mudou noutro aparelho, ou se foi apagado noutro aparelho e alguém o tenta "ressuscitar".
do $$ declare t text; begin
  foreach t in array array['inv_clients','inv_invoices','inv_expenses','inv_banks'] loop
    execute format('alter table public.%I add column if not exists rev integer not null default 0', t);
  end loop;
end $$;

create or replace function public.inv_rev_guard() returns trigger
  language plpgsql set search_path = ''
as $$
begin
  if tg_op = 'INSERT' then
    -- registo novo chega com versão 0 (ou sem versão); um registo que já existiu chega com 1 ou mais
    if coalesce(new.rev, 0) > 0 then
      raise exception 'deleted_elsewhere' using errcode = 'P0409', hint = 'O registo foi apagado noutro aparelho.';
    end if;
    new.rev := 1;
  else
    if new.rev is distinct from old.rev then
      raise exception 'stale_write' using errcode = 'P0409', hint = 'O registo mudou noutro aparelho.';
    end if;
    new.rev := old.rev + 1;
  end if;
  return new;
end $$;
-- (os triggers que usam esta função estão na migração 15)
revoke all on function public.inv_rev_guard() from public, anon, authenticated;

-- N4: os "2 dias" passam a ser 2 dias úteis (sábado e domingo não contam), como a app promete.
create or replace function public.ps_grace_until(ts timestamptz) returns timestamptz
  language plpgsql immutable set search_path = ''
as $$
declare d timestamptz := ts; n int := 0;
begin
  while n < 2 loop
    d := d + interval '1 day';
    if extract(isodow from d at time zone 'Europe/Lisbon') < 6 then n := n + 1; end if;
  end loop;
  return d;
end $$;

create or replace function public.has_access() returns boolean
  language sql stable security definer set search_path = ''
as $$
  select public.is_admin()
      or exists(select 1 from public.ps_subscriptions s where s.user_id = auth.uid()
                and (s.trial_ends_at > now() or coalesce(s.paid_until, '-infinity') > now()))
      or (exists(select 1 from public.ps_payment_claims c where c.user_id = auth.uid()
                 and c.status = 'pending' and public.ps_grace_until(c.created_at) > now())
          and not exists(select 1 from public.ps_payment_claims r where r.user_id = auth.uid()
                         and r.status in ('rejected', 'cancelled', 'refunded')))
$$;

-- M2: apagar a conta e voltar a registar o mesmo email não dá um período experimental novo.
-- Guarda-se só um hash do email (não o email), com a data.
create table if not exists public.ps_trial_used (email_hash text primary key, at timestamptz not null default now());
alter table public.ps_trial_used enable row level security;
revoke all on public.ps_trial_used from anon, authenticated;

create or replace function public.ps_email_hash(e text) returns text
  language sql immutable set search_path = ''
as $$ select encode(sha256(convert_to(lower(btrim(coalesce(e, ''))), 'UTF8')), 'hex') $$;

create or replace function public.ps_new_user() returns trigger
  language plpgsql security definer set search_path = ''
as $$
begin
  insert into public.ps_subscriptions (user_id, trial_ends_at)
  values (new.id, case when exists (select 1 from public.ps_trial_used u where u.email_hash = public.ps_email_hash(new.email))
                       then now() else now() + interval '30 days' end)
  on conflict do nothing;
  return new;
end $$;

-- chamada pela função de apagar conta (service_role) antes de apagar o utilizador
create or replace function public.ps_mark_trial_used(e text) returns void
  language sql security definer set search_path = ''
as $$ insert into public.ps_trial_used (email_hash) values (public.ps_email_hash(e)) on conflict do nothing $$;
revoke all on function public.ps_mark_trial_used(text) from public, anon, authenticated;
grant execute on function public.ps_mark_trial_used(text) to service_role;

-- N6: faturas têm sempre número
do $$ begin
  alter table public.inv_invoices add constraint inv_invoices_number_chk check (btrim(coalesce(number, '')) <> '');
exception when duplicate_object then null; end $$;

-- M9: perguntas falhadas não gastam a quota da pessoa (continuam a contar para o limite global,
-- porque gastam pedidos ao fornecedor). Contas em período experimental: 3 por dia.
create or replace function public.ps_ai_reserve(uid uuid, per_user integer, global_day integer) returns bigint
  language plpgsql security definer set search_path = ''
as $$
declare rid bigint; lim int := per_user;
begin
  perform pg_advisory_xact_lock(hashtext('ps_ai_reserve'));
  if not exists (select 1 from public.ps_subscriptions s where s.user_id = uid and coalesce(s.paid_until, '-infinity') > now())
     and not exists (select 1 from public.ps_admins a where a.user_id = uid) then lim := least(per_user, 3); end if;
  if (select count(*) from public.ps_ai_usage where user_id = uid and created_at > now() - interval '1 day'
        and (ok or created_at > now() - interval '2 minutes')) >= lim then return -1; end if;
  if (select count(*) from public.ps_ai_usage where created_at >= date_trunc('day', now() at time zone 'utc') at time zone 'utc') >= global_day then return -2; end if;
  insert into public.ps_ai_usage (user_id, ok) values (uid, false) returning id into rid;
  return rid;
end $$;

-- N5: o próprio pode ver (e exportar) o seu uso do assistente
grant select on public.ps_ai_usage to authenticated;
drop policy if exists ps_ai_usage_own on public.ps_ai_usage;
create policy ps_ai_usage_own on public.ps_ai_usage for select to authenticated using (user_id = (select auth.uid()));

-- N12: o admin pode anular um pagamento aprovado (reembolso / engano): tira os meses ao "pago até".
alter table public.ps_payment_claims drop constraint if exists ps_payment_claims_status_check;
alter table public.ps_payment_claims add constraint ps_payment_claims_status_check
  check (status in ('pending', 'approved', 'rejected', 'cancelled', 'refunded'));
create or replace function public.admin_refund_claim(p_id uuid) returns boolean
  language plpgsql security definer set search_path = ''
as $$
declare c record;
begin
  if not public.is_admin() then raise exception 'forbidden' using errcode = '42501'; end if;
  select * into c from public.ps_payment_claims where id = p_id and status = 'approved' for update;
  if not found then return false; end if;
  update public.ps_payment_claims set status = 'refunded', reviewed_at = now() where id = p_id;
  if c.user_id is not null then
    update public.ps_subscriptions
       set paid_until = case when paid_until is null then null
                             else greatest(now(), paid_until - make_interval(months => c.months)) end,
           updated_at = now()
     where user_id = c.user_id;
  end if;
  return true;
end $$;
revoke all on function public.admin_refund_claim(uuid) from public, anon;
grant execute on function public.admin_refund_claim(uuid) to authenticated;

-- N14: tabelas e funções criadas no futuro não nascem abertas a anon/authenticated
alter default privileges for role postgres in schema public revoke all on tables from anon, authenticated;
alter default privileges for role postgres in schema public revoke all on sequences from anon, authenticated;
alter default privileges for role postgres in schema public revoke execute on functions from public, anon, authenticated;
-- net.http_post/http_get: não se revogam (as notificações ao admin dependem delas e o schema net não está exposto na API).
