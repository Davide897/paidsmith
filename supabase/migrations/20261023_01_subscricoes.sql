-- ===== Paidsmith: subscricoes, transferencias e administracao =====
create table public.ps_admins (user_id uuid primary key references auth.users(id) on delete cascade);
create table public.ps_subscriptions (
  user_id uuid primary key references auth.users(id) on delete cascade,
  trial_ends_at timestamptz not null default now() + interval '30 days',
  paid_until timestamptz,
  method text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now());
create table public.ps_payment_claims (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  email text,
  months int not null check (months in (1,3,12)),
  amount numeric not null,
  currency text not null check (currency in ('EUR','GBP')),
  reference text not null,
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  created_at timestamptz not null default now(),
  reviewed_at timestamptz);
create table public.ps_billing_config (
  id int primary key default 1 check (id = 1),
  holder text default '', iban text default '', bic text default '', bank text default '',
  gbp_details text default '',
  price_eur numeric not null default 6.99, price_gbp numeric not null default 5.99,
  updated_at timestamptz default now());
insert into public.ps_billing_config (id) values (1);

alter table public.ps_admins enable row level security;
alter table public.ps_subscriptions enable row level security;
alter table public.ps_payment_claims enable row level security;
alter table public.ps_billing_config enable row level security;

create function public.is_admin() returns boolean language sql stable security definer set search_path = '' as
$$ select exists(select 1 from public.ps_admins where user_id = auth.uid()) $$;

create function public.has_access() returns boolean language sql stable security definer set search_path = '' as $$
  select public.is_admin()
      or exists(select 1 from public.ps_subscriptions s where s.user_id = auth.uid()
                and (s.trial_ends_at > now() or coalesce(s.paid_until, '-infinity') > now()))
      or exists(select 1 from public.ps_payment_claims c where c.user_id = auth.uid()
                and c.status = 'pending' and c.created_at > now() - interval '7 days') $$;

create policy ps_admins_self on public.ps_admins for select to authenticated using (user_id = (select auth.uid()));
create policy ps_sub_read on public.ps_subscriptions for select to authenticated using (user_id = (select auth.uid()) or public.is_admin());
create policy ps_claims_read on public.ps_payment_claims for select to authenticated using (user_id = (select auth.uid()) or public.is_admin());
create policy ps_claims_insert on public.ps_payment_claims for insert to authenticated
  with check (user_id = (select auth.uid()) and status = 'pending' and reviewed_at is null);
create policy ps_cfg_read on public.ps_billing_config for select to authenticated using (true);
create policy ps_cfg_admin on public.ps_billing_config for update to authenticated using (public.is_admin()) with check (public.is_admin());
revoke all on public.ps_admins, public.ps_subscriptions, public.ps_payment_claims, public.ps_billing_config from anon;
grant select on public.ps_admins, public.ps_subscriptions to authenticated;
grant select, insert on public.ps_payment_claims to authenticated;
grant select, update on public.ps_billing_config to authenticated;

create function public.ps_claim_fill() returns trigger language plpgsql security definer set search_path = '' as $$
begin
  new.email := (select email from auth.users where id = new.user_id);
  new.status := 'pending'; new.reviewed_at := null;
  if exists(select 1 from public.ps_payment_claims where user_id = new.user_id and status = 'pending') then
    raise exception 'already_pending';
  end if;
  return new;
end $$;
create trigger ps_claim_fill before insert on public.ps_payment_claims for each row execute function public.ps_claim_fill();

create function public.ps_new_user() returns trigger language plpgsql security definer set search_path = '' as $$
begin insert into public.ps_subscriptions (user_id) values (new.id) on conflict do nothing; return new; end $$;
create trigger ps_on_auth_user_created after insert on auth.users for each row execute function public.ps_new_user();

create function public.admin_review_claim(claim_id uuid, approve boolean) returns void language plpgsql security definer set search_path = '' as $$
declare c public.ps_payment_claims;
begin
  if not public.is_admin() then raise exception 'not_admin'; end if;
  select * into c from public.ps_payment_claims where id = claim_id and status = 'pending' for update;
  if not found then raise exception 'claim_not_pending'; end if;
  update public.ps_payment_claims set status = case when approve then 'approved' else 'rejected' end, reviewed_at = now() where id = claim_id;
  if approve then
    insert into public.ps_subscriptions (user_id) values (c.user_id) on conflict do nothing;
    update public.ps_subscriptions s
       set paid_until = greatest(coalesce(s.paid_until, now()), s.trial_ends_at, now()) + make_interval(months => c.months),
           method = 'transfer', updated_at = now()
     where s.user_id = c.user_id;
  end if;
end $$;
revoke all on function public.admin_review_claim(uuid, boolean) from public, anon;
grant execute on function public.admin_review_claim(uuid, boolean) to authenticated;
revoke all on function public.is_admin(), public.has_access() from public, anon;
grant execute on function public.is_admin(), public.has_access() to authenticated;

do $$ declare t text; begin
  foreach t in array array['inv_clients','inv_banks','inv_invoices','inv_expenses'] loop
    execute format('drop policy %I on public.%I', t||'_own', t);
    execute format('create policy %I on public.%I for select to authenticated using ((select auth.uid()) = user_id)', t||'_read', t);
    execute format('create policy %I on public.%I for delete to authenticated using ((select auth.uid()) = user_id)', t||'_del', t);
    execute format('create policy %I on public.%I for insert to authenticated with check ((select auth.uid()) = user_id and public.has_access())', t||'_ins', t);
    execute format('create policy %I on public.%I for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id and public.has_access())', t||'_upd', t);
  end loop; end $$;
drop policy inv_receipts_own_insert on storage.objects;
create policy inv_receipts_own_insert on storage.objects for insert to authenticated
  with check (bucket_id = 'inv-receipts' and (storage.foldername(name))[1] = (select auth.uid())::text
              and public.my_receipts_count() < 300 and public.has_access());

insert into public.ps_admins (user_id) select id from auth.users order by created_at limit 1;
insert into public.ps_subscriptions (user_id) select id from auth.users on conflict do nothing;
