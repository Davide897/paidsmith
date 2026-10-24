-- M2: o acesso enquanto se confirma um pagamento baixa de 7 para 2 dias.
-- M3: o cliente pode cancelar um pedido pendente (fica 'cancelled', não se apaga).
--     Para não dar acesso grátis sem fim (cancelar e voltar a pedir), os 2 dias só contam
--     se a conta não tiver nenhum pedido recusado nem cancelado.
alter table public.ps_payment_claims drop constraint if exists ps_payment_claims_status_check;
alter table public.ps_payment_claims add constraint ps_payment_claims_status_check
  check (status in ('pending', 'approved', 'rejected', 'cancelled'));

create or replace function public.has_access() returns boolean
  language sql stable security definer set search_path = ''
as $$
  select public.is_admin()
      or exists(select 1 from public.ps_subscriptions s where s.user_id = auth.uid()
                and (s.trial_ends_at > now() or coalesce(s.paid_until, '-infinity') > now()))
      or (exists(select 1 from public.ps_payment_claims c where c.user_id = auth.uid()
                 and c.status = 'pending' and c.created_at > now() - interval '2 days')
          and not exists(select 1 from public.ps_payment_claims r where r.user_id = auth.uid()
                         and r.status in ('rejected', 'cancelled')))
$$;

create or replace function public.cancel_my_claim(p_id uuid) returns boolean
  language plpgsql security definer set search_path = ''
as $$
declare n int;
begin
  update public.ps_payment_claims set status = 'cancelled', reviewed_at = now()
   where id = p_id and user_id = auth.uid() and status = 'pending';
  get diagnostics n = row_count;
  return n = 1;
end $$;
revoke all on function public.cancel_my_claim(uuid) from public, anon;
grant execute on function public.cancel_my_claim(uuid) to authenticated;
