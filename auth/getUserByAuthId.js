import { createClient } from "@supabase/supabase-js";


// Load environment variables
const supabaseUrl = process.env.SUPABASE_URL;
const anonKey = process.env.ANON_KEY;
// Create Supabase client instance
const supabase = createClient(supabaseUrl, anonKey);

export const getUserbyAuthId = async (authId) => {
  if (!authId) {
    throw new Error("Auth Id is required to fetch User");
  }
  try {
    console.log("printing from the fetch user by id function",authId)
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq("id", authId)
      .single();
    if (error) {
      throw error;
    }
    console.log("printing from the getuserbyAuthId ");
    console.log(data);
    return data;
  } catch (err) {
    console.error("Error fetching user by auth ID:", err);
    throw err;
  }
};
