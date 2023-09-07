import express from "express";
import mongoose from "mongoose";
import conn from "./models/database.js/";
import cors from "cors";
import bodyParser from "body-parser";
import session from "express-session";
import passport from "passport";
import LocalStrategy from "passport-local";
import passportLocalMongoose from "passport-local-mongoose";
import "dotenv/config";

const app=express();
app.use(express.static("/public"));
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true,
        maxAge : 1000*60 }
  }))
app.use(passport.initialize());
app.use(passport.session());

const TTSSchema=new mongoose.Schema({
    name: String,
    username: String,
    password:String
});
TTSSchema.plugin(passportLocalMongoose);
const User=mongoose.model("User", TTSSchema);


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.post('/login', passport.authenticate('local'), function(req, res) {
    res.sendStatus(200);
  });
app.post("/signup",(req,res)=>{
    User.register(new User({name:req.body.name,username: req.body.username}),req.body.password,function(err,user){
            if(err){
                console.log(err);
            }
            else{
                res.sendStatus(200);
            }
        });
        
});

app.get("/logout",(req,res)=>{
    req.logout(function(err){
        if(err){
            console.log(err);   
        }
    });
    res.sendStatus(200);
});

app.listen(5000,console.log("Server Started"));