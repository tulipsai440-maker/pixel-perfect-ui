import { supabase } from "@/integrations/supabase/client";

export type EventRow = {
  id: string;
  title: string;
  description: string | null;
  location: string | null;
  starts_at: string;
  ends_at: string | null;
  type: string;
  band_url: string | null;
};

export async function fetchUpcomingEvents(limit = 20): Promise<EventRow[]> {
  const nowIso = new Date().toISOString();
  const { data, error } = await supabase
    .from("events")
    .select("id, title, description, location, starts_at, ends_at, type, band_url")
    .gte("starts_at", nowIso)
    .order("starts_at", { ascending: true })
    .limit(limit);
  if (error) throw error;
  return (data ?? []) as EventRow[];
}

export async function fetchAllEvents(): Promise<EventRow[]> {
  const { data, error } = await supabase
    .from("events")
    .select("id, title, description, location, starts_at, ends_at, type, band_url")
    .order("starts_at", { ascending: true });
  if (error) throw error;
  return (data ?? []) as EventRow[];
}
