//packages
import path from "path";
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";

//utils
import  connectDb  from "./config/db.js";

dotenv.config();

const port = process.env.PORT || 5000;

connectDb();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.json("hello")
})


app.listen(port, () => console.log(`server run on ${port}`));
