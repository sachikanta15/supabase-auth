import { createDbUser } from "../database/user/createDbUser.js";
import { createAuthUser } from "../auth/authuser.js";
import { authLogin } from "../auth/authlogin.js";

export const root = async (req, res) => {
  console.log("printig from the root");
  res.send("Welcome to the Supabase Auth");
};

//Inster new user to supabase auth
export const signup = async (req, res) => {
  try {
   
    let { email, password, firstName, lastName } = req.body;
  
    let authId = await createAuthUser(
      email,
      password,
    );
    await createDbUser({ id: authId,email,});
    res.status(200).send(`${firstName + " "+lastName } Your Account created Successfully!`);
  } catch (err) {
    res.status(400).send("Failed to sign user up !");
    console.error("log",err);
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

export const getUser = async (req,res)=>{
    res.status(200).send(req.user);
    // console.log(req)
    console.log("printing the user")
    console.log(req.user)
}

export const getUserTransaction = async (req,res)=>{
  res.status(200).send(req.user)
}