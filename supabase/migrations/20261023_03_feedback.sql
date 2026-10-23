create table public.ps_feedback (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  email text,
  kind text not null check (kind in ('bug','idea','question')),
  message text not null check (char_length(message) between 3 and 4000),
  context jsonb not null default '{}',
  status text not null default 'new' check (status in ('new','done')),
  created_at timestamptz not null default now());
alter table public.ps_feedback enable row level security;
create policy ps_fb_insert on public.ps_feedback for insert to authenticated with check (user_id = (select auth.uid()) and status = 'new');
create policy ps_fb_read on public.ps_feedback for select to authenticated using (user_id = (select auth.uid()) or public.is_admin());
create policy ps_fb_admin on public.ps_feedback for update to authenticated using (public.is_admin()) with check (public.is_admin());
revoke all on public.ps_feedback from anon;
grant select, insert, update on public.ps_feedback to authenticated;

create function public.ps_feedback_fill() returns trigger language plpgsql security definer set search_path = '' as $$
begin
  if new.user_id is distinct from auth.uid() then raise exception 'wrong_user'; end if;
  if (select count(*) from public.ps_feedback where user_id = new.user_id and created_at > now() - interval '1 day') >= 10 then
    raise exception 'too_many_feedback';
  end if;
  new.email := (select email from auth.users where id = new.user_id);
  new.status := 'new'; new.created_at := now();
  if octet_length(new.context::text) > 2000 then new.context := '{}'; end if;
  return new;
end $$;
create trigger ps_feedback_fill before insert on public.ps_feedback for each row execute function public.ps_feedback_fill();
