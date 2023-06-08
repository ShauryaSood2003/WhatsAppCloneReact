import { Box } from "@mui/material";
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import ChatContent from "./ChatContent";
import { useContext, useEffect,useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { getConversation,newMessage } from "../../../service/api";


export default function ChatBox(){
    const {person,account,socket,setNewMessageFlag,newMessageFlag}=useContext(AccountContext);
    const [Text,setText]=useState('');
    const [conversation,setConversation]=useState({});
    const [file,setFile]=useState();
    const [image,setImage]=useState("");
    const [incomingMessage,setIncomingMessage]=useState({});
    const [messages, setMessages] = useState([]);
   
    useEffect(()=>{
     socket.current.on("getMessage",data=>{
        setIncomingMessage({
            ...data,
            createdAt:Date.now()
        })
     })   
    },[socket]);
   

    useEffect(()=>{
        const getConversationDetails=async()=>{
            let data =await getConversation({senderId:account.sub,reciverId:person.sub});
            setConversation(data);
        }
        getConversationDetails();
    },[person.sub,account.sub]);


    useEffect(()=>{
        incomingMessage && conversation?.members?.includes(incomingMessage.senderId) &&
        setMessages(prev => [...prev,incomingMessage]);
    },[incomingMessage,conversation]);




    const sendText=async(e)=>{
        const code=e.keyCode || e.which;
        if(code === 13){
            let message={};
            if(!file){
                message={
                    senderId:account.sub,
                    reciverId:person.sub,
                    conversationId:conversation._id,
                    type:"text",
                    text:Text
                }
            }else{
                message={
                    senderId:account.sub,
                    reciverId:person.sub,
                    conversationId:conversation._id,
                    type:"file",
                    text:image
                }
            }

            socket.current.emit("sendMessage",message);
            await newMessage(message);
            setText('');
            setFile('');
            setImage('');
            setNewMessageFlag(prev => !prev);
        }
    }


    return(
       <Box>
            <ChatHeader person={person}/>
            <ChatContent 
                person={person} 
                conversation={conversation} 
                newMessageFlag={newMessageFlag} 
                messages={messages}
                setMessages={setMessages}
              
            />
            <ChatFooter 
                sendText={sendText} 
                setText={setText}
                Text={Text}
                file={file}
                setFile={setFile}
                setImage={setImage}
            />
            
       </Box>
    );
}