import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

let client: SupabaseClient | null = null;

try {
  if (supabaseUrl && supabaseKey) {
    client = createClient(supabaseUrl, supabaseKey);
  } else {
    console.warn('[Supabase] Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. Reviews will be disabled until env is configured.');
  }
} catch (e) {
  console.error('[Supabase] Failed to initialize client:', e);
}

// Minimal fallback that returns errors without crashing the UI
const fallback = {
  from() {
    return {
      insert: async () => ({ data: null, error: { message: 'Supabase not configured' } }),
      select: async () => ({ data: null, error: { message: 'Supabase not configured' } }),
      update: async () => ({ data: null, error: { message: 'Supabase not configured' } }),
      delete: async () => ({ data: null, error: { message: 'Supabase not configured' } }),
      eq: () => ({
        insert: async () => ({ data: null, error: { message: 'Supabase not configured' } }),
        select: async () => ({ data: null, error: { message: 'Supabase not configured' } }),
        update: async () => ({ data: null, error: { message: 'Supabase not configured' } }),
        delete: async () => ({ data: null, error: { message: 'Supabase not configured' } }),
        order: () => ({ select: async () => ({ data: null, error: { message: 'Supabase not configured' } }) }),
      }),
      order: () => ({ select: async () => ({ data: null, error: { message: 'Supabase not configured' } }) }),
    } as any;
  },
  auth: {
    getSession: async () => ({ data: { session: null }, error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe() {} } } }),
    signInWithPassword: async () => ({ data: null, error: { message: 'Supabase not configured' } }),
    signOut: async () => ({ error: null }),
  },
} as any;

export const supabase: SupabaseClient = (client ?? (fallback as unknown as SupabaseClient));
