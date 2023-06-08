import { Box, Typography ,styled} from "@mui/material";
import { useContext,useEffect,useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { setCoversation,getConversation } from "../../../service/api";
import { formatTime } from "../../../service/formating/format";

const Component=styled(Box)`
    display:flex;
    height:45px;
    cursor:pointer;
    padding:13px 0;
`
const ImageStyle=styled('img')({
    borderRadius:"50%",
    height:40,
    width:40,
    padding:"0 14px"
})

const Container=styled(Box)`
    display:flex;
`
const TimeStamp=styled(Box)`
    font-size:12px;
    margin-left:auto;
    margin-right:20px;
    color:#00000099;
`
const Text=styled(Box)`
    font-size:14px;
    color:#00000099;

`

export default function Conversations(props){

    const {setPerson,account,newMessageFlag}=useContext(AccountContext);
    const [messages,setMessages]=useState({});

    useEffect(()=>{
        const getConversationDetails=async()=>{
            const data=await getConversation({senderId:account.sub,reciverId:props.user.sub});
            setMessages({text:data?.messages,timestamp:data?.updatedAt})
        }
        getConversationDetails();
    },[newMessageFlag,account.sub,props.user.sub]);
    
    return(
        <Component onClick={async()=>{
            setPerson(props.user);
            await setCoversation({senderId:account.sub,reciverId:props.user.sub});
        }}>
            <Box>
                <ImageStyle src={props.user.picture} alt="Dp"/>
            </Box>
            <Box style={{width:"100%"}}>
                <Container>
                    <Typography>{props.user.name}</Typography>
                    {
                        messages?.text && 
                            <TimeStamp>{formatTime(messages?.timestamp)}</TimeStamp>
                    }
                </Container>
                <Box>
                    {
                        messages?.text && 
                            <Text>{messages?.text}</Text>
                    }
                </Box>
            </Box>
        </Component>
    );
}