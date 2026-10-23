-- Link revolut.me (cartão, Apple Pay, Google Pay e Revolut, sem integração) nos dados para receber.
alter table public.ps_billing_config add column if not exists revolut_tag text not null default '';
update public.ps_billing_config set revolut_tag = 'davidexp95' where id = 1 and revolut_tag = '';
