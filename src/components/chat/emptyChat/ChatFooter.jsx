import { Box ,styled} from "@mui/material";
import { useEffect } from "react";
import InputBase from '@mui/material/InputBase';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { uploadFile } from "../../../service/api";

const Container=styled(Box)`
    display:flex;
    padding:5px 16px;
    height:6vh;
    align-items:center;
    background:#ededed;
    color:#969696;
`

const StartIconsStyle=styled(Box)`
     &>*{
        padding:0 5px;
     }
`
const ClipIcon=styled(AttachFileIcon)`
    transform:rotate(40deg);
`
const InputField=styled(InputBase)`
    background:#FFFFFF;
    width:88%;
    border-radius:10px;
    font-size:14px;
    padding:3px 8px 3px 25px;
    margin:0 14px;

`

export default function ChatFooter({sendText,setText,Text,setFile,file,setImage}){
    useEffect(()=>{
        const getImage=async()=>{
            if(file){
                const data=new FormData();
                data.append('name',file.name);
                data.append('file',file);
                const response=await uploadFile(data);
                console.log(response);
                setImage(response.data);
            }
        }
        getImage();
    },[file,setImage])
    return (
        <Container>
            <StartIconsStyle>
                <SentimentSatisfiedAltIcon/>
                <label htmlFor="fileInput">
                    <ClipIcon/>
                </label>
                <input 
                    type="file"
                    id="fileInput"
                    style={{display:"none"}}
                    onChange={(e)=>{
                        
                        setFile(e.target.files[0]);
                        setText(e.target.files[0].name);
                        
                    }}
                />
            </StartIconsStyle>
            <InputField 
                placeholder="Type a message"
                onChange={(e)=>{setText(e.target.value)}}
                onKeyDown={(e)=>{
                    sendText(e);
                }}
                value={Text}
            />
            <KeyboardVoiceIcon/>
        </Container>
    );
}