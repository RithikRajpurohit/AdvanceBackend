import { Todo } from "../models/todo.js";

export const createTodo = async(req,res)=>
{
    try {
        const {work,time} = req.body;
        if(!work || !time)
        {
            return res.status(403).json(
                {
                    submission:false,
                    message:"All the filed are needed"
                }
            )
        }
      const todo = new Todo({work,time});
      todo.save();

      return res.status(201).json(
        {
            success:true,
            todo
        }
      )

    } catch (error) {
        console.log(error);
        
        
    }
}

export const getalltodos = async(req,res)=>
{
    const todos = await Todo.find();
    return res.status(200).json(
        {
            submission:true,
            todos
        }
    )
}

export const updateTodod= async (req,res)=>
{
      
    const todoid = req.params.id ; 
    const {work} = req.body ; 
    
    const todo = await Todo.findById(todoid);
    todo.work = work ; 
    todo.save();
    res.status(200).json(
        {
           succes:"true",
           message:"The valuse updated succesfully"
        }
    )


}

export const deletetodo = async (req,res)=>
{   
    const todoId = req.params.id ; 
    await Todo.findByIdAndDelete(todoId);
    res.status(200).json(
        {
            message:"the item deleted succesfully "
        }
    )
      
}