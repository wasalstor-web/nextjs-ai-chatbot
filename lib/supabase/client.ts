// Dynamic import for Supabase to make it optional
// biome-ignore lint/suspicious/noExplicitAny: Supabase is optional, type will be resolved at runtime
let createClientFn: ((url: string, key: string, options?: any) => any) | null = null;

async function getCreateClient() {
  if (!createClientFn) {
    try {
      // biome-ignore lint/suspicious/noExplicitAny: Dynamic import type
      const supabaseModule: any = await import("@supabase/supabase-js");
      createClientFn = supabaseModule.createClient;
    } catch {
      throw new Error("Supabase is not installed. Please install @supabase/supabase-js");
    }
  }
  return createClientFn;
}

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

/**
 * Create Supabase client for client-side usage (anon key)
 */
export async function getSupabaseClient() {
  const createClient = await getCreateClient();
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL and Anon Key are required");
  }

  return createClient(supabaseUrl, supabaseAnonKey);
}

/**
 * Create Supabase client for server-side usage (service role key)
 * This has admin privileges and should only be used on the server
 */
export async function getSupabaseAdminClient() {
  const createClient = await getCreateClient();
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

