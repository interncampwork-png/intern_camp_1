import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Log helpful instructions if variables are missing
if (!supabaseUrl || !supabaseAnonKey) {
  console.log("Supabase key unconfigured. App is utilizing Google Sheets CSV mode as a seamless fallback.");
}

export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

export const getSupabase = () => {
  if (!supabase) {
    throw new Error('Supabase client not initialized. Check your environment variables in Settings.');
  }
  return supabase;
};
