-- Avisos por email ao administrador: pagamento por confirmar e mensagens novas.
-- A base de dados chama a função ps-notify com um segredo guardado no cofre (vault); falhas não bloqueiam o cliente.
create extension if not exists pg_net with schema extensions;

create or replace function public.ps_notify_admin() returns trigger language plpgsql security definer set search_path = '' as $$
declare sec text;
begin
  select decrypted_secret into sec from vault.decrypted_secrets where name = 'ps_notify_secret';
  if sec is null then return new; end if;
  perform net.http_post(
    url := 'https://dsqgaajxaswetbctxigt.supabase.co/functions/v1/ps-notify',
    headers := jsonb_build_object('Content-Type', 'application/json', 'x-ps-secret', sec),
    body := jsonb_build_object('type', tg_argv[0], 'record', to_jsonb(new)),
    timeout_milliseconds := 10000);
  return new;
exception when others then
  return new;  -- o aviso nunca impede o pedido do cliente
end $$;
revoke all on function public.ps_notify_admin() from public, anon, authenticated;

drop trigger if exists ps_claim_notify on public.ps_payment_claims;
create trigger ps_claim_notify after insert on public.ps_payment_claims for each row execute function public.ps_notify_admin('claim');
drop trigger if exists ps_feedback_notify on public.ps_feedback;
create trigger ps_feedback_notify after insert on public.ps_feedback for each row execute function public.ps_notify_admin('feedback');
