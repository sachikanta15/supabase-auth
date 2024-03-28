import { createClient } from "@supabase/supabase-js";

// Load environment variables
const supabaseUrl = process.env.SUPABASE_URL;
const anonKey = process.env.ANON_KEY;
// Create Supabase client instance
const supabase = createClient(supabaseUrl, anonKey);

export const getUserBankUserDetails = async (authId) => {
  if (!authId) {
    throw new Error("Please login to get the details");
  }
  try {

    const { data, error } = await supabase
      .from("bank_users_details")
      .select("*")
      .eq("id", authId);
    if (error) {
      throw error;
    }
    console.log("printing from the getUserBankUserDetails ");
    console.log(data);
    return data;
  } catch (err) {
    console.error("Error fetching user by auth ID:", err);
    throw err;
  }
};
