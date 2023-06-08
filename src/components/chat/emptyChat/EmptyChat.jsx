import {Box,Typography,Divider,styled} from "@mui/material";
import { emptyChatImage } from "../../../constants/data";
import LockIcon from '@mui/icons-material/Lock';

const ImageStyle=styled('img')({
    width:400,
    marginTop:100
})

const Component=styled(Box)`
    background:#f8f9fa;
    text-align:center;
    height:100vh;
    padding:30px 0;
    overflow: hidden;
`
const Heading=styled(Typography)`
    font-size:25px;
    margin:25px 0 10px 0;
    font-weight:300;
    font-family:inherit;
    color:#41525d;
`

const SubTitle=styled(Typography)`
    font-size:14px;
    font-weight:400;
    color:#667781;
    font-family:inherit;
`

const Encrypted=styled(Box)`
    display:flex;
    justify-content:center;
    margin-top:120px;
`
const LockIconStyled=styled(LockIcon)`
    font-weight:600;
    font-size:20px;
    padding:0 8px;
`
const StyledDivider=styled(Divider)`
    margin:50px 0;
`

function EmptyChat(){
    return(
        <Component>
           
            <ImageStyle src={emptyChatImage} alt="Empty-Chat"/>
            <Heading>WhatsApp Web</Heading>
            <SubTitle>Send and receive messages without keeping your phone online.</SubTitle>
            <SubTitle>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</SubTitle>
            <StyledDivider/>
            <Encrypted>
                <LockIconStyled/> 
                <SubTitle> End-to-end encrypted</SubTitle>
            </Encrypted>
           
           
        </Component>
    );
}
export default EmptyChat;