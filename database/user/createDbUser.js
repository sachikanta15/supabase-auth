import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const anonKey = process.env.ANON_KEY;
// Create Supabase client instance
const supabase = createClient(supabaseUrl, anonKey);

export const creteDbUser = async (userData) => {
  try {
    const { data, error } = await supabase.from("user").insert(userData);
    if (error) {
      throw error;
    }
    return data;
  } catch (err) {
    console.error("Error creating user", err);
    throw err;
  }
};
