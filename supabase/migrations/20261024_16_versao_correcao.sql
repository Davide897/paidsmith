-- Correção da 15: num upsert (INSERT ... ON CONFLICT DO UPDATE) o trigger BEFORE INSERT corre antes de se saber
-- que vai ser uma atualização. Se o registo já existe, deixa passar: a verificação de versão faz-se no UPDATE.
-- E o código de erro passa a PT409, que a API devolve como HTTP 409 (conflito), em vez de 500.
create or replace function public.inv_rev_guard() returns trigger
  language plpgsql set search_path = ''
as $$
declare ex boolean;
begin
  if tg_op = 'INSERT' then
    execute format('select exists (select 1 from %I.%I where id = $1)', tg_table_schema, tg_table_name) into ex using new.id;
    if ex then return new; end if;                       -- vai ser UPDATE (upsert)
    if coalesce(new.rev, 0) > 0 then
      raise exception 'deleted_elsewhere' using errcode = 'PT409', hint = 'O registo foi apagado noutro aparelho.';
    end if;
    new.rev := 1;
  else
    if new.rev is distinct from old.rev then
      raise exception 'stale_write' using errcode = 'PT409', hint = 'O registo mudou noutro aparelho.';
    end if;
    new.rev := old.rev + 1;
  end if;
  return new;
end $$;
