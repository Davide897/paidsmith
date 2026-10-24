-- N3: ligar a verificação de versão. Aplicar só depois de publicada a app que envia e atualiza 'rev'.
-- (a função inv_rev_guard é a da migração 14, com 'new.rev := 1' na criação)
create or replace function public.inv_rev_guard() returns trigger
  language plpgsql set search_path = ''
as $$
begin
  if tg_op = 'INSERT' then
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
-- registos que já existem passam a versão 1 (0 fica reservado para "ainda não existe")
update public.inv_clients set rev = 1 where rev = 0;
update public.inv_invoices set rev = 1 where rev = 0;
update public.inv_expenses set rev = 1 where rev = 0;
update public.inv_banks set rev = 1 where rev = 0;
do $$ declare t text; begin
  foreach t in array array['inv_clients','inv_invoices','inv_expenses','inv_banks'] loop
    execute format('drop trigger if exists %I on public.%I', t || '_rev', t);
    execute format('create trigger %I before insert or update on public.%I for each row execute function public.inv_rev_guard()', t || '_rev', t);
  end loop;
end $$;
