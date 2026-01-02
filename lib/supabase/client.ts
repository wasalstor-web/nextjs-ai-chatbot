// Optional Supabase import
let createClient: any = null;

try {
  const supabaseModule = require("@supabase/supabase-js");
  createClient = supabaseModule.createClient;
} catch {
  // Supabase not installed
}

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

/**
 * Create Supabase client for client-side usage (anon key)
 */
export function createSupabaseClient() {
  if (!createClient) {
    throw new Error("Supabase is not installed. Please install @supabase/supabase-js");
  }
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL and Anon Key are required");
  }

  return createClient(supabaseUrl, supabaseAnonKey);
}

/**
 * Create Supabase client for server-side usage (service role key)
 * This has admin privileges and should only be used on the server
 */
export function createSupabaseAdminClient() {
  if (!createClient) {
    throw new Error("Supabase is not installed. Please install @supabase/supabase-js");
  }
  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error("Supabase URL and Service Role Key are required");
  }

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

/**
 * Get Supabase URL from environment
 */
export function getSupabaseUrl(): string {
  return supabaseUrl;
}

/**
 * Get Supabase anon key from environment
 */
export function getSupabaseAnonKey(): string {
  return supabaseAnonKey;
}

