import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    aud:{
        type:String
    },
    sub:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    email_verfied:{
        type:Boolean
    },
    name:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        required:true
    },
    given_name:{
        type:String
    },
    family_name:{
        type:String
    },
    iat:{
        type:Number
    },
    exp:{
        type:Number
    },
    jti:{
        type:String
    }
});

export const User=new mongoose.model("user",UserSchema);

