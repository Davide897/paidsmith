-- Assistente de IA: contagem de perguntas e reserva atómica (só o service_role pode executar)
create table if not exists public.ps_ai_usage (id bigserial primary key, user_id uuid not null references auth.users(id) on delete cascade, ok boolean not null default true, created_at timestamptz not null default now());
create index if not exists ps_ai_usage_created_at_idx on public.ps_ai_usage (created_at);
alter table public.ps_ai_usage enable row level security;
revoke all on public.ps_ai_usage from anon, authenticated;
alter table public.inv_settings add column if not exists tutorial_done boolean not null default false;

CREATE OR REPLACE FUNCTION public.ps_ai_reserve(uid uuid, per_user integer, global_day integer)
 RETURNS bigint
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
declare rid bigint;
begin
  perform pg_advisory_xact_lock(hashtext('ps_ai_reserve'));
  if (select count(*) from public.ps_ai_usage where user_id = uid and created_at > now() - interval '1 day') >= per_user then return -1; end if;
  if (select count(*) from public.ps_ai_usage where created_at >= date_trunc('day', now() at time zone 'utc') at time zone 'utc') >= global_day then return -2; end if;
  insert into public.ps_ai_usage (user_id, ok) values (uid, false) returning id into rid;
  return rid;
end $function$
;
revoke all on function public.ps_ai_reserve(uuid, int, int) from public, anon, authenticated;
grant execute on function public.ps_ai_reserve(uuid, int, int) to service_role;
