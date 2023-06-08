import Conversation from "../dataBase/Conversation_Schema.js";
export const newConversation=async (req,res)=>{
    try{
        const senderId=req.body.senderId;
        const reciverId=req.body.reciverId;

        const exist=await Conversation.findOne({members:{$all:[reciverId,senderId]}});

        if(exist){
            return res.status(200).json({msg:'Conversation already exist'});
        }

        const newConversation=new Conversation({
            members:[senderId,reciverId]
        });
        await newConversation.save();
        return res.status(200).json({msg:'Conversation Added successfully'});
    }
    catch(error){
        return res.status(500).json({msg:error.message});
    }

}

export const getConversation=async(req,res)=>{
    try{
        const senderId=req.body.senderId;
        const reciverId=req.body.reciverId;

        
        const exist=await Conversation.findOne({members:{$all:[reciverId,senderId]}});
        return res.status(200).json(exist);
    }catch(error){
        return res.status(500).json({msg:error.message});
    }
}