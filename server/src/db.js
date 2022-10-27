import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

console.log(process.env.DB_URL)
mongoose.connect(process.env.DB_URL)

const db = mongoose.connection;
const handleOpen = () => console.log("✔ Connected to DB");
const handleError = () => console.log("❌ Error on DB Connection");

db.once("open", handleOpen);
db.on("error", handleError);