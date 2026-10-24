-- B2: privilégios de tabela no mínimo de que a app precisa (o RLS continua a ser a regra principal;
--     isto é a segunda barreira). anon (sem sessão) não toca em nenhuma tabela.
do $$ declare t text; begin
  foreach t in array array['inv_settings','inv_clients','inv_invoices','inv_banks','inv_expenses',
                           'ps_admins','ps_ai_usage','ps_billing_config','ps_feedback','ps_payment_claims','ps_subscriptions'] loop
    execute format('revoke all on table public.%I from anon, authenticated', t);
  end loop;
end $$;
grant select, insert, update, delete on public.inv_settings, public.inv_clients, public.inv_invoices,
  public.inv_banks, public.inv_expenses to authenticated;
grant select on public.ps_admins, public.ps_subscriptions to authenticated;
grant select, update on public.ps_billing_config to authenticated;          -- update: só admin (RLS)
grant select, insert, update on public.ps_feedback to authenticated;        -- update: só admin (RLS)
grant select, insert on public.ps_payment_claims to authenticated;          -- cancelar/aprovar: por funções
-- ps_ai_usage: só a função do assistente (service_role)

-- dados para receber pagamentos: só para quem tem sessão (antes qualquer pessoa os podia ler)
drop policy if exists ps_cfg_read on public.ps_billing_config;
create policy ps_cfg_read on public.ps_billing_config for select to authenticated using (true);

-- B3: sem acesso, não se mudam os dados do negócio (nome, NIF, IBAN, IVA, prazos, linhas predefinidas).
--     Continua a poder-se mudar só preferências de visualização (tutorial, calendário).
create or replace function public.inv_settings_guard() returns trigger
  language plpgsql security definer set search_path = ''
as $$
begin
  if public.has_access() then return new; end if;
  if tg_op = 'INSERT' then raise exception 'subscription_required' using errcode = '42501'; end if;
  if (new.business_name, new.address, new.nif, new.iban, new.extra, new.default_vat, new.exp_invoice,
      new.line_presets, new.default_terms, new.terms_rules)
     is distinct from
     (old.business_name, old.address, old.nif, old.iban, old.extra, old.default_vat, old.exp_invoice,
      old.line_presets, old.default_terms, old.terms_rules)
  then raise exception 'subscription_required' using errcode = '42501'; end if;
  return new;
end $$;
drop trigger if exists inv_settings_guard on public.inv_settings;
create trigger inv_settings_guard before insert or update on public.inv_settings
  for each row execute function public.inv_settings_guard();

-- B3: substituir uma foto também exige acesso
drop policy if exists inv_receipts_own_update on storage.objects;
create policy inv_receipts_own_update on storage.objects for update to authenticated
  using (bucket_id = 'inv-receipts' and (storage.foldername(name))[1] = (select auth.uid())::text)
  with check (bucket_id = 'inv-receipts' and (storage.foldername(name))[1] = (select auth.uid())::text and public.has_access());

-- B4: um registo só pode apontar para cliente / banco / fatura da mesma conta
create or replace function public.inv_same_owner() returns trigger
  language plpgsql security definer set search_path = ''
as $$
begin
  if new.client_id is not null and not exists (select 1 from public.inv_clients c where c.id = new.client_id and c.user_id = new.user_id)
    then raise exception 'foreign_owner' using errcode = '23503'; end if;
  if tg_table_name = 'inv_invoices' and new.bank_id is not null
     and not exists (select 1 from public.inv_banks b where b.id = new.bank_id and b.user_id = new.user_id)
    then raise exception 'foreign_owner' using errcode = '23503'; end if;
  if tg_table_name = 'inv_expenses' and new.invoice_id is not null
     and not exists (select 1 from public.inv_invoices i where i.id = new.invoice_id and i.user_id = new.user_id)
    then raise exception 'foreign_owner' using errcode = '23503'; end if;
  return new;
end $$;
drop trigger if exists inv_invoices_same_owner on public.inv_invoices;
create trigger inv_invoices_same_owner before insert or update of client_id, bank_id, user_id on public.inv_invoices
  for each row execute function public.inv_same_owner();
drop trigger if exists inv_expenses_same_owner on public.inv_expenses;
create trigger inv_expenses_same_owner before insert or update of client_id, invoice_id, user_id on public.inv_expenses
  for each row execute function public.inv_same_owner();
revoke all on function public.inv_same_owner() from public, anon, authenticated;
revoke all on function public.inv_settings_guard() from public, anon, authenticated;
