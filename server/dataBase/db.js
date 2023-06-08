import mongoose from "mongoose";
import * as dotenv from 'dotenv'
dotenv.config();

const URL=process.env.MONGOOSE_URL;

const Connection=async ()=>{
    try{
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          
        

    }catch(error){
        console.log("Error while getting connected to the mongose db",error.message);
    }
}

export default Connection;