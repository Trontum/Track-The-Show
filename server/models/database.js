import mongoose from "mongoose"
import "dotenv/config"


mongoose.connect(process.env.URI);

let conn=mongoose.connection;

conn.on("connected",()=>console.log("Database is connected successfully"));
conn.on("diconnected",()=>console.log("Database is disconnected successfully"));
conn.on("error",console.error.bind(console,"Connection Error !!! "));

export default conn;