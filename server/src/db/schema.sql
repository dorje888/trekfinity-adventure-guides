-- Enable pgcrypto for gen_random_uuid
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- PostgreSQL schema for registrations (bookings)
CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  country TEXT,
  trek_name TEXT NOT NULL,
  preferred_date DATE,
  group_size INTEGER,
  special_requirements TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Helpful index for sorting by date
CREATE INDEX IF NOT EXISTS bookings_created_at_idx ON bookings (created_at DESC);

-- Reviews table
CREATE TABLE IF NOT EXISTS public.reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email TEXT NOT NULL,
  rating INT CHECK (rating >= 1 AND rating <= 5) NOT NULL,
  comment TEXT NOT NULL,
  destination TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  approved BOOLEAN DEFAULT false
);

-- Admin users table
CREATE TABLE IF NOT EXISTS public.admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Trigger to update updated_at
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'reviews_set_updated_at'
  ) THEN
    CREATE TRIGGER reviews_set_updated_at
    BEFORE UPDATE ON public.reviews
    FOR EACH ROW
    EXECUTE FUNCTION public.set_updated_at();
  END IF;
END;
$$;

-- Row Level Security and policies (for Supabase)
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Public can insert reviews
CREATE POLICY IF NOT EXISTS reviews_public_insert ON public.reviews
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Public can read only approved reviews
CREATE POLICY IF NOT EXISTS reviews_public_select ON public.reviews
  FOR SELECT
  TO public
  USING (approved = true);

-- Admin can manage reviews and admin_users (replace with your admin role)
-- In Supabase, you can bind this to authenticated users with a specific email/domain.
CREATE POLICY IF NOT EXISTS reviews_admin_all ON public.reviews
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY IF NOT EXISTS admin_users_admin_all ON public.admin_users
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);
