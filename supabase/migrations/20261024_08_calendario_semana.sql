-- Calendário: cada conta escolhe o 1.º dia da semana e como se numeram as semanas.
-- week_start: 1 = segunda (ISO), 0 = domingo, 6 = sábado.
-- week_num: 'iso' = número ISO 8601 (o da segunda-feira da semana); 'first' = número ISO do 1.º dia da semana.
alter table public.inv_settings add column if not exists week_start smallint not null default 1;
alter table public.inv_settings add column if not exists week_num text not null default 'iso';
do $$ begin
  alter table public.inv_settings add constraint inv_settings_week_start_chk check (week_start in (0,1,6));
exception when duplicate_object then null; end $$;
do $$ begin
  alter table public.inv_settings add constraint inv_settings_week_num_chk check (week_num in ('iso','first'));
exception when duplicate_object then null; end $$;
-- contas que já existiam veem o calendário como até agora (domingo, número da semana do domingo)
update public.inv_settings set week_start = 0, week_num = 'first' where updated_at < '2026-10-24 23:59:59+00';
