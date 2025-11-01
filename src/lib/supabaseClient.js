import { createClient } from "@supabase/supabase-js";

const supabase_Url = import.meta.env.VITE_SUPABASE_API_URL;
const supabase_AnonKey = import.meta.env.VITE_SUPABASE_API_ANON_KEY;
console.log("Isi VITE_SUPABASE_URL:", import.meta.env.VITE_SUPABASE_API_URL);
console.log(
  "Isi VITE_SUPABASE_ANON_KEY:",
  import.meta.env.VITE_SUPABASE_API_ANON_KEY
);
export const supabase = createClient(supabase_Url,supabase_AnonKey) 