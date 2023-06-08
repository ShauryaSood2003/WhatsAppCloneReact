import axios from "axios";

const url="http://localhost:8000";

export const AddUser= async (data)=>{
   try {
    await axios.post(`${url}/add`,data);
   } catch (error) {
    console.log("Error while addUser API",error.message);
   }
}

export const GetUser= async()=>{
  try{
    const response=await axios.get(`${url}/users`);

    return (response.data);
  }catch(error){
    console.log("Error is ",error.message);
  }
}
export const setCoversation=async(data)=>{
  try{
    await axios.post(`${url}/conversation/add`,data);
  }catch(error){
    console.log("Error :",error.message); 
  }
}

export const getConversation =async(data)=>{
  try{
    const responde =await axios.post(`${url}/conversation/get`,data);
    return responde.data;
  }catch(error){
    console.log("Error : ",error.message);
  }
}

export const newMessage=async(data)=>{
  try{
    await axios.post(`${url}/message/add`,data);
  }catch(error){
    console.log("Error :",error.message); 
  }
}
export const getMessage =async(id)=>{
  try{
    let responde =await axios.get(`${url}/message/get/${id}`);
    return responde.data;
  }catch(error){
    console.log("Error : ",error.message);
  }
}

export const uploadFile=async(data)=>{
  try{
    return await axios.post(`${url}/file/upload`,data);
  }catch(e){
    console.log("error while uploading the file : ",e.message);
  }
}