-- Correção da 12: em plpgsql, new.<campo> de outra tabela dá erro mesmo dentro de um "and" já falso.
-- Uma função por tabela. E o upsert das definições (INSERT ... ON CONFLICT) passa a ser avaliado como alteração.
create or replace function public.inv_invoices_same_owner() returns trigger
  language plpgsql security definer set search_path = ''
as $$
begin
  if new.client_id is not null and not exists (select 1 from public.inv_clients c where c.id = new.client_id and c.user_id = new.user_id)
    then raise exception 'foreign_owner' using errcode = '23503'; end if;
  if new.bank_id is not null and not exists (select 1 from public.inv_banks b where b.id = new.bank_id and b.user_id = new.user_id)
    then raise exception 'foreign_owner' using errcode = '23503'; end if;
  return new;
end $$;
create or replace function public.inv_expenses_same_owner() returns trigger
  language plpgsql security definer set search_path = ''
as $$
begin
  if new.client_id is not null and not exists (select 1 from public.inv_clients c where c.id = new.client_id and c.user_id = new.user_id)
    then raise exception 'foreign_owner' using errcode = '23503'; end if;
  if new.invoice_id is not null and not exists (select 1 from public.inv_invoices i where i.id = new.invoice_id and i.user_id = new.user_id)
    then raise exception 'foreign_owner' using errcode = '23503'; end if;
  return new;
end $$;
drop trigger if exists inv_invoices_same_owner on public.inv_invoices;
create trigger inv_invoices_same_owner before insert or update of client_id, bank_id, user_id on public.inv_invoices
  for each row execute function public.inv_invoices_same_owner();
drop trigger if exists inv_expenses_same_owner on public.inv_expenses;
create trigger inv_expenses_same_owner before insert or update of client_id, invoice_id, user_id on public.inv_expenses
  for each row execute function public.inv_expenses_same_owner();
drop function if exists public.inv_same_owner();
revoke all on function public.inv_invoices_same_owner() from public, anon, authenticated;
revoke all on function public.inv_expenses_same_owner() from public, anon, authenticated;

create or replace function public.inv_settings_guard() returns trigger
  language plpgsql security definer set search_path = ''
as $$
begin
  if public.has_access() then return new; end if;
  -- upsert: se a linha já existe, a verificação faz-se no UPDATE que se segue
  if tg_op = 'INSERT' then
    if exists (select 1 from public.inv_settings s where s.user_id = new.user_id) then return new; end if;
    raise exception 'subscription_required' using errcode = '42501';
  end if;
  if (new.business_name, new.address, new.nif, new.iban, new.extra, new.default_vat, new.exp_invoice,
      new.line_presets, new.default_terms, new.terms_rules)
     is distinct from
     (old.business_name, old.address, old.nif, old.iban, old.extra, old.default_vat, old.exp_invoice,
      old.line_presets, old.default_terms, old.terms_rules)
  then raise exception 'subscription_required' using errcode = '42501'; end if;
  return new;
end $$;
