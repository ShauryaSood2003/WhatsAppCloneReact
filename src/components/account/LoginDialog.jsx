import { Dialog,Box,Typography,List,ListItem,styled} from "@mui/material";
import {qrCodeImage} from "../../constants/data";
import { GoogleLogin } from '@react-oauth/google';
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import jwt_decode from "jwt-decode";
import {AddUser} from "../../service/api";

const dialogStyle={
    height:'96%',
    marginTop:"12%",
    width:"60%",
    maxWidth:"100%",
    maxHeight:"100%",
    boxShadow:"none"
}

const Component=styled(Box)`
    display:flex;
`
const Container=styled(Box)`
    padding:56px 0 56px 56px;
`
const QrCode=styled('img')({
    height:256,
    width:256,
    margin:"56px 0"
})
const Title=styled(Typography)`
    font-size:26px;
    color:#525252;
    font-weight:300;
    font-family:inherit;
    margin-bottom:25px;
`

const StyleList=styled(List)`
    & > li {
        padding:0;
        margin-top:15px;
        font-size:18px;
        line-height:28px;
    }
`

function LoginDialog(){
    const {setAccount}=useContext(AccountContext);
    return(
        <Dialog open={true} PaperProps={{sx:dialogStyle}} hideBackdrop={true}>
        <Component>
            <Container>
                <Title>Use WhatsApp on your computer</Title>
                <StyleList>
                    <ListItem>1. Open WhatsApp on your phone</ListItem>
                    <ListItem>2. Tap Menu Settings and select Linked device</ListItem>
                    <ListItem>3. Tap to Link a device</ListItem>
                    <ListItem>4. Point your phone to this screen to capture the QR code</ListItem>
                </StyleList>

            </Container>
            <Box style={{position:"relative"}}>

                <QrCode src={qrCodeImage} alt="QR-CODE"/>

                <Box style={{position:"absolute",top:"45%",transform:"translateX(25%)"}}>

                    <GoogleLogin
                        onSuccess={async (res)=>{
                            const decoded=jwt_decode(res.credential);
                            setAccount(decoded);
                            await AddUser(decoded);
                        }}
                        onError={(err) => {
                            console.log(err);
                        }}
                    />
                </Box>
            </Box>

        </Component>
        </Dialog>
    )
}
export default LoginDialog;