import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const anonKey = process.env.ANON_KEY;
// Create Supabase client instance
const supabase = createClient(supabaseUrl, anonKey);

export const createDbUser = async (userData) => {
  console.log("printing from the createuser function")
  console.log(userData)
  try {
    const { data, error } = await supabase.from('users').insert(userData);
    if (error) {
      throw error;
    }
    console.log("printing from creating db user")
    console.log(data)
    return data;
  } catch (err) {
    console.error("Error creating user", err);
    throw err;
  }
};
