import LoginDialog from "./account/LoginDialog";
import {AppBar,Toolbar,styled,Box} from "@mui/material"
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import ChatDialog from "./chat/ChatDialog";

const LoginHeading=styled(AppBar)`
    height:200px;
    background-color:#00bfa5;
    box-shadow:none;
`
const Heading=styled(AppBar)`
    height:125px;
    background-color:#00A884;
    box-shadow:none;
`

const Component=styled(Box)`
    height:100vh;
    background-color:#DCDCDC;
`

function Messenger(){
    const {account}=useContext(AccountContext);
 
return(
    <Component>
    {

    account?<>
    <Heading>
        <Toolbar>

        </Toolbar>
    </Heading>
    <ChatDialog/>
    </>
    
    :
    <>
    <LoginHeading>
        <Toolbar>

        </Toolbar>
    </LoginHeading>
    <LoginDialog/>
    </>

    }
    </Component>
);
}
export default Messenger;