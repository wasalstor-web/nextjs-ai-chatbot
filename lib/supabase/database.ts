import "server-only";
import { createSupabaseAdminClient } from "./client";

/**
 * Database operations using Supabase
 */
export class SupabaseDatabase {
  private client;

  private clientPromise: Promise<any>;

  constructor() {
    this.clientPromise = createSupabaseAdminClient();
  }

  private async getClient() {
    return this.clientPromise;
  }

  /**
   * Execute a raw SQL query
   */
  async query(sql: string, params?: unknown[]) {
    const client = await this.getClient();
    const { data, error } = await client.rpc("exec_sql", {
      sql,
      params: params || [],
    });

    if (error) {
      throw new Error(`Supabase query error: ${error.message}`);
    }

    return data;
  }

  /**
   * Get data from a table
   */
  async from(table: string) {
    const client = await this.getClient();
    return client.from(table);
  }

  /**
   * Insert data into a table
   */
  async insert(table: string, data: unknown) {
    const client = await this.getClient();
    const { data: result, error } = await client
      .from(table)
      .insert(data)
      .select();

    if (error) {
      throw new Error(`Supabase insert error: ${error.message}`);
    }

    return result;
  }

  /**
   * Update data in a table
   */
  async update(table: string, data: unknown, filter: Record<string, unknown>) {
    const client = await this.getClient();
    let query = client.from(table).update(data);

    for (const [key, value] of Object.entries(filter)) {
      query = query.eq(key, value);
    }

    const { data: result, error } = await query.select();

    if (error) {
      throw new Error(`Supabase update error: ${error.message}`);
    }

    return result;
  }

  /**
   * Delete data from a table
   */
  async delete(table: string, filter: Record<string, unknown>) {
    const client = await this.getClient();
    let query = client.from(table).delete();

    for (const [key, value] of Object.entries(filter)) {
      query = query.eq(key, value);
    }

    const { data: result, error } = await query.select();

    if (error) {
      throw new Error(`Supabase delete error: ${error.message}`);
    }

    return result;
  }
}

/**
 * Create Supabase database instance
 */
export function createSupabaseDatabase() {
  return new SupabaseDatabase();
}

