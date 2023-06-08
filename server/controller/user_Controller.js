import { User } from "../dataBase/Schema.js";

export const addUser= async (req,res)=>{


    try{

        await User.findOne({sub:req.body.sub}).then((found)=>{
            if(found){
                return res.status(200).json({msg:'user already exists'});
            }
            const newUser =new User(req.body);
            newUser.save();
            return res.status(200).json({msg:'user added successfully'});

        })

    }catch(error){
        return res.status(500).json({msg:error.message});
    }
}

export const getUsers= async (req,res)=>{
    try{
        const result =await User.find({});
        return res.status(200).json(result);

    }catch(error){
        return res.status(500).json({msg:error.message});
    }
}