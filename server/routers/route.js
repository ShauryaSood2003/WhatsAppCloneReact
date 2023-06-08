import express from "express";

import {addUser ,getUsers} from "../controller/user_Controller.js";
import { newConversation,getConversation } from "../controller/conversation_Controller.js";
import { getMessage, newMessage } from "../controller/Message_Controller.js";
import { uploadFile,getImage } from "../controller/image_Controller.js";
import upload from "../utils/upload.js";



const route=express.Router();

route.post("/add",addUser);
route.get("/users",getUsers);

route.post("/conversation/add",newConversation);
route.post('/conversation/get',getConversation);

route.post("/message/add",newMessage);
route.get("/message/get/:id",getMessage);

route.post('/file/upload',upload.single('file'),uploadFile);
route.get("/file/:filename",getImage);


export default route;