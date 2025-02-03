import { User } from "../models/user.js";
import bcrypt from "bcrypt";
export const register =async (req,res)=>
{
    try {

        const {fullName , email , password} = req.body;
        if(!fullName || !email || !password)
        {
            return res.status(403).json(
                {
                    success:false,
                    message:"All the fields are required"
                }
            )
        }
       
        const user = await User.findOne({email});
        if(user)
        {
            return res.status(403).json(
                {
                    message:"User already exits"
                }
            )
        }
        const hashedPassword = await bcrypt.hash(password,10)
        await User.create(
            {
                fullName, 
                email,
                password:hashedPassword
            }
        )

        return res.status(201).json(
            {
                submission : true,
                message : "Welcome to the website after the login process"
            }
        )

        
    } catch (error) {
        console.log(error);
        
    }
}

export const login = async (req,res)=>
{
       try {
        const { email, password} = req.body;

        const user = await User.findOne({email});
  
        if(!user)
        {
           res.status(403).json(
              {
                  message:"User is not present in the database"
              }
          )
        }
         const ispasswordcorrect = await bcrypt.compare(password , user.password);
         if(!ispasswordcorrect)
         {
             res.status(403).json(
              {
                  message:"Password is incorrect"
              }
            )
         }
  
         return  res.status(200).json(
          {
              message:"Welcome back buddy"
          }
         )
        
       } catch (error) {
           console.log(error);
           
       }
     



}