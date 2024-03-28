import { createDbUser } from "../database/user/createDbUser.js";
import { createAuthUser } from "../auth/authuser.js";
import { authLogin } from "../auth/authlogin.js";
import { getUserbyAuthId } from "../auth/getUserByAuthId.js";
import { getUserTransactions } from "../auth/getUserTransactions.js";
import { getUserBankAccountsDetails } from "../data/getUserBankAccountsDetails.js";
import { getUserBankUserDetails } from "../data/getUserBankUserDetails.js";

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
  console.log("printing from the getuser controllers",req.authId)
  let authId  = req.authId;
  console.log(authId);
  try{
    let user = await getUserbyAuthId(authId);
    res.status(200).send(user);
  }
  catch(err){
    res.status(400).send(err)
  }
}

export const getUserTransaction = async (req,res)=>{
  // console.log("printing from the getUserTransaction controllers",req.authId)
  let authId  = req.authId;
  console.log(authId);
  try{
    let userTransactions = await getUserTransactions(authId);
    console.log(typeof(userTransactions))
    console.log("User Transactions:", userTransactions);
    res.status(200).send(userTransactions);
  }
  catch(err){
    console.error("Error fetching user transactions:", err);
    res.status(400).send(err);
  }
}

export const userBankAccountsDetails = async (req,res)=>{
  console.log("printing from the getUserTransaction controllers",req.authId)
  let authId  = req.authId;
  console.log(authId);
  try{
    let userTransactions = await getUserBankAccountsDetails(authId);
    res.status(200).send(userTransactions);
  }
  catch(err){
    console.error("Error fetching user getUserBankDetails:", err);
    res.status(400).send(err);
  }
}

export const userBankUserDetails = async (req,res)=>{
  // console.log("printing from the getUserTransaction controllers",req.authId)
  let authId  = req.authId;
  console.log(authId);
  try{
    let userTransactions = await getUserBankUserDetails(authId);
    res.status(200).send(userTransactions);
  }
  catch(err){
    console.error("Error fetching user getUserBankDetails:", err);
    res.status(400).send(err);
  }
}

