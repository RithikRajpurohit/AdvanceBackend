import express from "express" ; 
//import mongoose from "mongoose";
import dotenv from "dotenv"
import bodyParser from "body-parser";
import connectDB from "./db/database.js";
import router from "./Routes/user.js";
import userTodo from "./Routes/todo.js"
const app = express();

dotenv.config();



const PORT =process.env.PORT || 3000;
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
connectDB();


app.use("/home",router)
app.use("/api/v1/todo",userTodo)



app.listen(PORT , ()=>
{
    console.log("server listen at the port 8000");
})



