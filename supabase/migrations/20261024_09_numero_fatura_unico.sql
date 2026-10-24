-- M7: o mesmo número de fatura não pode existir duas vezes na mesma conta
-- (ex.: dois aparelhos sem rede a criar a "2026-005"). Ignora maiúsculas e espaços nas pontas.
create unique index if not exists inv_invoices_user_number_uq
  on public.inv_invoices (user_id, lower(btrim(number)))
  where btrim(coalesce(number, '')) <> '';
