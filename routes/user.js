import { Router } from "express";
import {
  root,
  signup,
  login,
  getUser,
  getUserTransaction,
  userBankUserDetails,
  userBankAccountsDetails,
} from "../controllers/user.js";
import { auth_middlewares } from "../auth/auth_middlewares.js";
const router = Router();

router.get("/", root);
router.post("/signup", signup);

router.post("/login", login);
router.get("/getUser", auth_middlewares, getUser);
router.get("/getUserTransactions", auth_middlewares, getUserTransaction);
router.get("/getUserBankUserDetails",auth_middlewares,userBankUserDetails);
router.get("/getAccountDetails",auth_middlewares,userBankAccountsDetails);
export default router;
