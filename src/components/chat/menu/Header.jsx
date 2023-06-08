import { Box,styled } from "@mui/material";
import InfoDrawer from "../../drawer/InfoDrawer";
import ChatIcon from '@mui/icons-material/Chat';
import HeaderMenu from "./HeaderMenu";
import { useState } from "react";


const Component=styled(Box)`
    height:44px;
    background-color:#ededed;
    padding:8px 16px;
    display:flex;
    align-items:center;
`


const Wrapper=styled(Box)`
    margin-left:auto;
    & > * {
        margin-left:2px;
        padding:8px;

    };
    & :first-child{
        font-size:22px;
        margin-right:8px;
        margin-top:3px;
    }
`

function Header(){

    const [openDrawer,setOpenDrawer]=useState(false);
   
    return(
            <Component>
                <InfoDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
                <Wrapper>
                    <ChatIcon/>
                    <HeaderMenu setOpenDrawer={setOpenDrawer}/>
                </Wrapper>
            </Component>
   
    );
}
export default Header;