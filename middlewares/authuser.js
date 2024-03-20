import { createClient } from "@supabase/supabase-js"; // Import createClient from supabase-js
import "dotenv/config";

// Load environment variables
const supabaseUrl = process.env.SUPABASE_URL; 
const anonKey = process.env.ANON_KEY; 
// Create Supabase client instance
const supabase = createClient(supabaseUrl, anonKey);

export const createAuthUser = async (email,password,firstName,lastName) => {
    console.log("prinitng from the authuser")
    console.log(email,password,firstName,lastName)
  try {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
      firstName,
      lastName,
    });

    if (error) {
      throw error;
    }

    return user;
  } catch (err) {
    console.error( err.message);
    throw err;
  }
};
