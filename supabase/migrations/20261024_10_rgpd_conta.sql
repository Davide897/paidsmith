-- M10 (RGPD / consumidor)
-- 1) Os pagamentos confirmados ficam guardados quando a conta é apagada (obrigação fiscal até 10 anos):
--    deixam de estar ligados ao utilizador (user_id fica vazio) mas mantêm data, valor, moeda, referência e email.
alter table public.ps_payment_claims alter column user_id drop not null;
alter table public.ps_payment_claims drop constraint if exists ps_payment_claims_user_id_fkey;
alter table public.ps_payment_claims add constraint ps_payment_claims_user_id_fkey
  foreign key (user_id) references auth.users(id) on delete set null;

-- 2) Consentimento expresso de início imediato (Diretiva 2011/83/UE, art. 7.º/3 e 14.º/3):
--    novos pedidos de pagamento só entram com a caixa marcada. Os antigos ficam como estão (NOT VALID).
alter table public.ps_payment_claims add column if not exists start_now_consent boolean not null default false;
do $$ begin
  alter table public.ps_payment_claims add constraint ps_payment_claims_consent_chk check (start_now_consent) not valid;
exception when duplicate_object then null; end $$;
