import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';

export type DestinationRow = Database['public']['Tables']['destinations']['Row'];
export type AttractionRow = Database['public']['Tables']['destination_attractions']['Row'];

export async function fetchDestination(slug: string) {
  const { data, error } = await supabase
    .from('destinations')
    .select('*')
    .eq('slug', slug)
    .single();
  if (error) return { data: null as DestinationRow | null, error };
  return { data, error: null as any } as const;
}

export async function fetchAttractions(slug: string) {
  const { data, error } = await supabase
    .from('destination_attractions')
    .select('*')
    .eq('destination_slug', slug)
    .order('sort_order', { ascending: true });
  if (error) return { data: [] as AttractionRow[], error };
  return { data: (data || []) as AttractionRow[], error: null as any } as const;
}
