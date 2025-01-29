import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        work:
        {
            type:String,
            required:true,
        },
        time:
        {
            type:String,
            required:true
        }
    }
)

export const Todo = mongoose.model("Todo", todoSchema);