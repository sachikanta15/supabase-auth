import express from "express"
import 'dotenv/config'
import bodyParser from "body-parser";
import userRouter from "./routes/user.js"


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/api/v1/users",userRouter);
export default app;