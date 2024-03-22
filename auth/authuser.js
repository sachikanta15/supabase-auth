import { createClient } from "@supabase/supabase-js"; // Import createClient from supabase-js
import "dotenv/config";

// Load environment variables
const supabaseUrl = process.env.SUPABASE_URL;
const anonKey = process.env.ANON_KEY;
// Create Supabase client instance
const supabase = createClient(supabaseUrl, anonKey);

export const createAuthUser = async (email, password) => {
  try {
    console.log("starting authenticateing the users")
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.log("prinitng the error fomr the signup page", error);
      console.log("printing error from authuser");
      console.log(error);
      throw error;
    }
    console.log("printing from the authUser");
    console.log(data);
    
    return data.user.id;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};
