import { creteDbUser } from "../database/user/createDbUser.js";
import { createAuthUser } from "../middlewares/authUser.js";
import { authLogin } from "../middlewares/authlogin.js";

export const root = async (req, res) => {
  console.log("printig from the root");
  res.send("Welcome to the Supabase Auth");
};

//Inster new user to supabase auth
export const signup = async (req, res) => {
  try {
   
    let { email, password, firstName, lastName } = req.body;
    
    console.log("print the value")
    console.log(email,password,firstName,lastName)
    let authId = await createAuthUser(
      email,
      password,
      firstName,
      lastName
    );
    await creteDbUser({ auth_id: authId, email, firstName, lastName });
    res.status(200).send("Account created Successfully!");
  } catch (err) {
    res.status(400).send("Failed to sign user up !");
    console.error(err);
  }
};

//login user into supabase
export const login = async (req, res) => {
  let { email, password } = req.body;
  try {
    let data = await authLogin(email, password);
    res.status(200).send(data);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

