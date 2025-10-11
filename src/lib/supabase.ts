import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Participant {
  id: string;
  full_name: string;
  email: string;
  phone?: string;
  house_preference?: string;
  dietary_restrictions?: string;
  additional_notes?: string;
  registered_at: string;
  created_at: string;
}

export interface AdminProfile {
  id: string;
  email: string;
  created_at: string;
}
