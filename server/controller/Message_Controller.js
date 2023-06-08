import Message from "../dataBase/Message_Schema.js";
import Conversation from "../dataBase/Conversation_Schema.js";

export const newMessage=async (req,res)=>{
    try{
        const newMess=new Message(req.body);
        await newMess.save();
        await Conversation.findByIdAndUpdate(req.body.conversationId,{messages:req.body.text});

        return res.status(200).json('Update and added succesfully');
    }catch(e){
        return res.status(500).json(e.message);
    }
};

export const getMessage=async(req,res)=>{
    try{
        const currentMessage=await Message.find({conversationId:req.params.id});
        return res.status(200).json(currentMessage);
    }catch(error){
        return res.status(500).json(e.message);
    }
}