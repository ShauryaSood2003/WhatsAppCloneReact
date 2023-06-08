import { Box, Dialog,styled } from "@mui/material";
import Menu from "./menu/Menu";
import EmptyChat from "./emptyChat/EmptyChat";
import ChatBox from "./emptyChat/ChatBox";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";


const dialogStyle={
    height:'95%',
    width:"100%",
    margin:"20px",
    borderRadius:"0",
    maxWidth:"100%",
    maxHeight:"100%",
    boxShadow:"none",
    backgroundColor:"none",
    overflow:"hidden"
}

const Component=styled(Box)`
    display:flex;
`
const LeftContainer=styled(Box)`
    width:25%;
    min-width:450px;
`
const RightContainer=styled(Box)`
    width:73%;
    min-width:300px;
    height:100%;
    border-left:1px solid rgb(0,0,0,0.14);
`

export default function ChatDialog(){
    const {person}=useContext(AccountContext);
    return(
        <Dialog
        open={true}
        PaperProps={{sx:dialogStyle}}
        hideBackdrop={true}
        >
            <Component >
                <LeftContainer >
                    <Menu/>
                </LeftContainer>
                <RightContainer>
                    {  Object.keys(person).length?
                        <ChatBox/>
                        :
                        <EmptyChat/>
                    }
                </RightContainer>
            </Component>
        </Dialog>
    );
}