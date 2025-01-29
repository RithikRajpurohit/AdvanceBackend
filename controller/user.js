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