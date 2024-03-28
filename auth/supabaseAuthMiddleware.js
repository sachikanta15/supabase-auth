import { createClient } from "@supabase/supabase-js";
import  {getUserbyAuthId}  from "./getUserByAuthId.js";

const supabaseUrl = process.env.SUPABASE_URL;
const anonKey = process.env.ANON_KEY;
// Create Supabase client instance
const supabase = createClient(supabaseUrl, anonKey);

export const supabaseAuthMiddleware = async (req, res, next) => {
  // console.log("printing from the supabaseAuthMiddlewares page");
  // console.log(req);
  let authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Unathorized" });
  }
  const token = authHeader.split(" ")[1];

  let { data, error } = await supabase.auth.getUser(token);
  if (error) {
    console.log("Failed to get supabase auth user", error);
    return res.status(401).json({ message: "Unauthorized" });
  }

  let authId = data.user.id;
  console.log("priniting the authID");
  console.log(authId);
  // let user = await getUserbyAuthId(authId);
  req.authId = authId;
  return next();
};
