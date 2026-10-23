-- valor e referência calculados no servidor (o cliente não os pode escolher)
create or replace function public.ps_claim_fill() returns trigger language plpgsql security definer set search_path = '' as $$
declare cfg public.ps_billing_config;
begin
  if new.user_id is distinct from auth.uid() then raise exception 'wrong_user'; end if;
  if exists(select 1 from public.ps_payment_claims where user_id = new.user_id and status = 'pending') then
    raise exception 'already_pending';
  end if;
  select * into cfg from public.ps_billing_config where id = 1;
  new.amount := round((case when new.currency = 'GBP' then cfg.price_gbp else cfg.price_eur end) * new.months, 2);
  new.reference := 'PS-' || upper(substr(replace(new.user_id::text, '-', ''), 1, 8));
  new.email := (select email from auth.users where id = new.user_id);
  new.status := 'pending'; new.reviewed_at := null; new.created_at := now();
  return new;
end $$;

-- os 7 dias de acesso enquanto se confirma só valem se nunca houve um pagamento recusado
create or replace function public.has_access() returns boolean language sql stable security definer set search_path = '' as $$
  select public.is_admin()
      or exists(select 1 from public.ps_subscriptions s where s.user_id = auth.uid()
                and (s.trial_ends_at > now() or coalesce(s.paid_until, '-infinity') > now()))
      or (exists(select 1 from public.ps_payment_claims c where c.user_id = auth.uid()
                 and c.status = 'pending' and c.created_at > now() - interval '7 days')
          and not exists(select 1 from public.ps_payment_claims r where r.user_id = auth.uid() and r.status = 'rejected')) $$;
