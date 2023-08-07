import express from "express"
import mongoose from "mongoose";
import conn from "./models/database.js/";
import cors from "cors";

const app=express();

app.use(cors());

const TTSSchema=new mongoose.Schema({
    name: String,
    email: String,
    password:String
});

const User=mongoose.model("User", TTSSchema);


// Routes

app.post("/login",(req,res)=> console.log("Posted Successfully"));

app.listen(5000,console.log("Server started on port 5000"));