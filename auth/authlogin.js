import { createClient } from "@supabase/supabase-js"; // Import createClient from supabase-js
import "dotenv/config";

// Load environment variables
const supabaseUrl = process.env.SUPABASE_URL; 
const anonKey = process.env.ANON_KEY; 
// Create Supabase client instance
const supabase = createClient(supabaseUrl, anonKey);

export const authLogin = async (email,password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
      
    });

    if (error) {
      throw error;
    }

    return data;
  } catch (err) {
    console.error( err.message);
    throw err;
  }
};
