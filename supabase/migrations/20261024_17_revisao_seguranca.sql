-- Revisão de segurança automática:
-- 1) Quem apaga a conta e volta com o mesmo email também não volta a ter os 2 dias de acesso durante a confirmação.
alter table public.ps_trial_used add column if not exists no_grace boolean not null default true;

create or replace function public.has_access() returns boolean
  language sql stable security definer set search_path = ''
as $$
  select public.is_admin()
      or exists(select 1 from public.ps_subscriptions s where s.user_id = auth.uid()
                and (s.trial_ends_at > now() or coalesce(s.paid_until, '-infinity') > now()))
      or (exists(select 1 from public.ps_payment_claims c where c.user_id = auth.uid()
                 and c.status = 'pending' and public.ps_grace_until(c.created_at) > now())
          and not exists(select 1 from public.ps_payment_claims r where r.user_id = auth.uid()
                         and r.status in ('rejected', 'cancelled', 'refunded'))
          and not exists(select 1 from public.ps_trial_used t join auth.users u on u.id = auth.uid()
                         where t.email_hash = public.ps_email_hash(u.email) and t.no_grace))
$$;

-- 2) IA: além das respostas bem-sucedidas, no máximo o dobro do limite em tentativas por dia (falhadas incluídas).
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
  if (select count(*) from public.ps_ai_usage where user_id = uid and created_at > now() - interval '1 day') >= lim * 2 then return -1; end if;
  if (select count(*) from public.ps_ai_usage where created_at >= date_trunc('day', now() at time zone 'utc') at time zone 'utc') >= global_day then return -2; end if;
  insert into public.ps_ai_usage (user_id, ok) values (uid, false) returning id into rid;
  return rid;
end $$;
