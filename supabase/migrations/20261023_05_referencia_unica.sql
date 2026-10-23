-- Referência única por pagamento (PS-XXXXXXXX-n) e no máximo um pedido pendente por cliente, garantido por índice.
create unique index if not exists ps_claims_one_pending on public.ps_payment_claims (user_id) where status = 'pending';
create unique index if not exists ps_claims_reference_unique on public.ps_payment_claims (reference);

create or replace function public.ps_claim_fill() returns trigger language plpgsql security definer set search_path = '' as $$
declare cfg public.ps_billing_config; n int;
begin
  if new.user_id is distinct from auth.uid() then raise exception 'wrong_user'; end if;
  perform pg_advisory_xact_lock(hashtext('ps_claim_' || new.user_id::text));
  if exists(select 1 from public.ps_payment_claims where user_id = new.user_id and status = 'pending') then
    raise exception 'already_pending';
  end if;
  select * into cfg from public.ps_billing_config where id = 1;
  select count(*) + 1 into n from public.ps_payment_claims where user_id = new.user_id;
  new.amount := round((case when new.currency = 'GBP' then cfg.price_gbp else cfg.price_eur end) * new.months, 2);
  new.reference := 'PS-' || upper(substr(replace(new.user_id::text, '-', ''), 1, 8)) || '-' || n;
  new.email := (select email from auth.users where id = new.user_id);
  new.status := 'pending'; new.reviewed_at := null; new.created_at := now();
  return new;
end $$;
