
-- Roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own roles"
ON public.user_roles FOR SELECT TO authenticated
USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

-- Events
CREATE TABLE public.events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  location text,
  starts_at timestamptz NOT NULL,
  ends_at timestamptz,
  type text NOT NULL DEFAULT 'Meeting',
  band_url text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.events TO anon;
GRANT SELECT ON public.events TO authenticated;
GRANT ALL ON public.events TO service_role;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Events are publicly readable"
ON public.events FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Admins can insert events"
ON public.events FOR INSERT TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update events"
ON public.events FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete events"
ON public.events FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger LANGUAGE plpgsql SET search_path = public
AS $$ BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

CREATE TRIGGER events_set_updated_at
BEFORE UPDATE ON public.events
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Seed a few upcoming placeholder events (admin can edit/delete later)
INSERT INTO public.events (title, description, location, starts_at, type) VALUES
  ('Weekly Troop Meeting', 'Weekly meeting — uniform recommended.', 'North Collier Fire Station #45, 1885 Veterans Park Dr, Naples, FL 34109', (now() + interval '3 days')::date + time '19:00', 'Meeting'),
  ('Summer Court of Honor', 'Rank advancement and merit badge recognition ceremony.', 'North Collier Fire Station #45', (now() + interval '10 days')::date + time '19:00', 'Ceremony'),
  ('Big Cypress Weekend Campout', 'Weekend campout in the Big Cypress Preserve.', 'Big Cypress National Preserve', (now() + interval '18 days')::date + time '17:00', 'Campout'),
  ('Merit Badge University Signup Deadline', 'Deadline to register for Merit Badge University.', 'Online', (now() + interval '25 days')::date + time '23:59', 'Deadline');
