-- Create destinations and destination_attractions tables
create table if not exists public.destinations (
  slug text primary key,
  name text not null,
  subtitle text,
  hero_local text,
  hero_remote text,
  created_at timestamptz not null default now()
);

alter table public.destinations enable row level security;

create policy "Public can read destinations" on public.destinations
for select using (true);

create table if not exists public.destination_attractions (
  id uuid primary key default gen_random_uuid(),
  destination_slug text not null references public.destinations(slug) on delete cascade,
  name text not null,
  description text not null,
  image_local text,
  image_remote text,
  sort_order integer default 0,
  created_at timestamptz not null default now()
);

alter table public.destination_attractions enable row level security;

create policy "Public can read destination attractions" on public.destination_attractions
for select using (true);

-- Seed initial data from existing hard-coded content
insert into public.destinations (slug, name, subtitle, hero_local, hero_remote) values
  ('kathmandu', 'Kathmandu', 'The vibrant heart of Nepal — ancient temples, bustling bazaars, and timeless culture.', '/assets/destinations/kathmandu.webp', null)
  on conflict (slug) do nothing;

insert into public.destinations (slug, name, subtitle, hero_local, hero_remote) values
  ('pokhara', 'Pokhara', 'Discover Nepal\'s stunning lakeside city, nestled beneath the majestic Annapurna range with breathtaking views and futuristic adventures.', '/assets/destinations/pokhara.webp', null)
  on conflict (slug) do nothing;

insert into public.destinations (slug, name, subtitle, hero_local, hero_remote) values
  ('lumbini', 'Lumbini', 'The sacred birthplace of Lord Buddha — serenity, history, and devotion.', '/assets/destinations/lumbini.jpg', null)
  on conflict (slug) do nothing;

insert into public.destinations (slug, name, subtitle, hero_local, hero_remote) values
  ('chitwan', 'Chitwan National Park', 'Nepal\'s premier wildlife destination — tigers, rhinos, elephants and pristine jungles.', '/assets/destinations/chitwan.jpg', null)
  on conflict (slug) do nothing;

-- Kathmandu attractions
insert into public.destination_attractions (destination_slug, name, description, image_local, image_remote, sort_order) values
  ('kathmandu', 'Pashupatinath Temple', 'Sacred Hindu temple complex and UNESCO World Heritage site on the banks of the Bagmati River.', '/lovable-uploads/kathmandu-pashupatinath.jpg', 'https://images.unsplash.com/photo-1565073624497-7e651f791a3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 1),
  ('kathmandu', 'Boudhanath Stupa', 'One of the largest stupas in the world and a center of Tibetan Buddhism in Nepal.', '/lovable-uploads/kathmandu-boudhanath.jpg', 'https://images.unsplash.com/photo-1580181977189-3a31c4a3b1ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 2),
  ('kathmandu', 'Kathmandu Durbar Square', 'Historic heart of the old town featuring intricate woodcarvings, pagoda temples, and royal palaces.', '/lovable-uploads/kathmandu-durbar.jpg', 'https://images.unsplash.com/photo-1606466133939-91bce87e9ab1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 3)
  on conflict do nothing;

-- Pokhara attractions
insert into public.destination_attractions (destination_slug, name, description, image_local, image_remote, sort_order) values
  ('pokhara', 'Phewa Lake', 'The second largest lake in Nepal offering stunning reflections of the Annapurna range and boating opportunities.', '/lovable-uploads/pokhara-phewa.jpg', 'https://images.unsplash.com/photo-1571722288716-5566d3d35379?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 1),
  ('pokhara', 'World Peace Pagoda', 'A stunning white stupa offering panoramic views of the mountains, lake, and the city of Pokhara.', '/lovable-uploads/pokhara-peace-pagoda.jpg', 'https://images.unsplash.com/photo-1625497861033-e39acb28b3d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 2),
  ('pokhara', 'Davis Falls', 'A unique waterfall that flows directly into a natural tunnel, with an interesting backstory and mythology.', '/lovable-uploads/pokhara-davis-falls.jpg', 'https://images.unsplash.com/photo-1605152410734-c8128a997fa0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 3)
  on conflict do nothing;

-- Lumbini attractions
insert into public.destination_attractions (destination_slug, name, description, image_local, image_remote, sort_order) values
  ('lumbini', 'Maya Devi Temple', 'The exact birthplace of Buddha, marked by the Ashoka Pillar and ancient remains.', '/lovable-uploads/lumbini-mayadevi.jpg', 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 1),
  ('lumbini', 'Sacred Garden', 'The tranquil garden surrounding the Maya Devi Temple with the sacred Bodhi tree.', '/lovable-uploads/lumbini-garden.jpg', 'https://images.unsplash.com/photo-1550679560-b8a0fe8c5608?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 2),
  ('lumbini', 'Ashoka Pillar', 'Erected by Emperor Ashoka in 249 BCE marking Buddha\'s birthplace.', '/lovable-uploads/lumbini-ashoka.jpg', 'https://images.unsplash.com/photo-1505599950312-56a9b54e1f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 3)
  on conflict do nothing;

-- Chitwan attractions
insert into public.destination_attractions (destination_slug, name, description, image_local, image_remote, sort_order) values
  ('chitwan', 'Bengal Tigers', 'Chitwan is home to the endangered Bengal tiger, with over 120 of these magnificent creatures living in the park.', '/lovable-uploads/chitwan-tiger.jpg', 'https://images.unsplash.com/photo-1583499871880-de841d1ace2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 1),
  ('chitwan', 'One-horned Rhinoceros', 'Chitwan is renowned for its successful conservation of the greater one-horned rhinoceros.', '/lovable-uploads/chitwan-rhino.jpg', 'https://images.unsplash.com/photo-1605515298941-d61889e0fc6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 2),
  ('chitwan', 'Asian Elephants', 'Observe these gentle giants in their natural habitat or learn about conservation efforts at the elephant breeding center.', '/lovable-uploads/chitwan-elephant.jpg', 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 3)
  on conflict do nothing;
