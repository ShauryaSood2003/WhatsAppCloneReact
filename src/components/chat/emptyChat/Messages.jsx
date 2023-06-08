import {Box,Typography,styled} from "@mui/material";
import {formatTime,downloadMedia} from "../../../service/formating/format";
import {useContext} from "react";
import {AccountContext} from "../../../context/AccountProvider";
import FileDownloadIcon from '@mui/icons-material/FileDownload';



const Own = styled(Box)`
    background:#dcf8c6;
    padding:5px;
    margin-left:auto;
    width:60%;
    width:fit-content;
    border-radius:10px;
    display:flex;
    word-break:break-word;
`
const Wrapper = styled(Box)`
    background:#FFFFFF;
    padding:5px;
    width:60%;
    width:fit-content;
    border-radius:10px;
    display:flex;
    word-break:break-word;
`
const Text = styled(Typography)`
    font-size:14px;
    padding:0 25px 0 5px;

`
const Time = styled(Typography)`
    font-size:10px;
    color:#919191;
    margin-top:8px;
    word-break:keep-all;

`
const DownloadStyled=styled(FileDownloadIcon)`
  border:1px solid grey;
  border-radius:50%;
  font-size:20px;
`

export default function Messages({messages}) {
  const {account} = useContext(AccountContext);

  const ImageMessage=({messages})=>{
    return(
      <Box>
        {   
          messages?.type?.includes(".pdf") ? 
            <Box>
            <img style={{width:300,height:"100%",objectFit:"cover"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" alt="pdf"/>
            </Box>   
            : 
            <img style={{width:300,height:"100%",objectFit:"cover"}} src={messages.text} alt={messages.text}/>
            
        }
        <Box style={{display:"flex", justifyContent: "space-between",marginBottom:10}}>
          <Time> {formatTime(messages.createdAt)} </Time> 
          <DownloadStyled onClick={(e)=>{
            downloadMedia(e,messages.text);
          }}/>
        </Box>
      </Box>
    );
  }

  const TextMessage=({messages})=>{
    return(
      <>
        <Text> {messages.text} </Text> 
        <Time> {formatTime(messages.createdAt)} </Time> 
      </>
    );
  }

  return ( 
    <>
     {
      account.sub === messages.senderId ?
        <Own> 
            {
              messages.type === "file" ? 
                <ImageMessage messages={messages}/>
                :
                <TextMessage messages={messages}/>
            }
        </Own> 
        :
        <Wrapper> 
            {
              messages.type === "file" ? 
                <ImageMessage messages={messages}/>
                :
                <TextMessage messages={messages}/>
            }
        </Wrapper>
    } 
    </>

  );
}
