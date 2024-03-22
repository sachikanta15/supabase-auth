import { createClient } from "@supabase/supabase-js"; // Import createClient from supabase-js
import "dotenv/config";

// Load environment variables
const supabaseUrl = process.env.SUPABASE_URL;
const anonKey = process.env.ANON_KEY;
// Create Supabase client instance
const supabase = createClient(supabaseUrl, anonKey);

export const createAuthUser = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: "user@example.com",
      password: "securePassword",
    });

    if (error) {
      console.log("prinitng the error fomr the signup page", error);
      throw error;
    }
    console.log("printing from the authUser");
    console.log(data);
    if (error) {
      console.log("printing error from authuser");
      console.log(error);
    }
    return data.user.id;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};
