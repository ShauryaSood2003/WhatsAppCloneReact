import mongoose from "mongoose";

const Schem=new mongoose.Schema({
    members:{
        type:Array
    },
    messages:{
        type:String
    }

},{
    timestamps:true
});

const Conversation=new mongoose.model("conversation",Schem);

export default Conversation;