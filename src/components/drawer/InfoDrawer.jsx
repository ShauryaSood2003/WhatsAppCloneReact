import { useContext} from "react";
import { AccountContext } from "../../context/AccountProvider";
import { styled,Drawer, Box, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from "./Profile";

const Dp =styled('img')({
    borderRadius:"50%",
    height:40,
    width:40
})

const drawerStyle={
    left:20,
    top:17,
    height:"95%",
    width:"30%",
    boxShadow:"none"
}

const Header=styled(Box)`
    display:flex;
    background:#008069;
    height:107px;
    color:#FFFFFF;
    & > *{
        margin-top:auto;
        padding:15px;
        font-weight:600;
        
    }
`
const Component=styled(Box)`
    background:#ededed;
    height:85%;
`

export default function InfoDrawer({openDrawer,setOpenDrawer}){
    const {account}=useContext(AccountContext);
  
    return(
        <>
            <Dp src={account.picture} alt="DP" onClick={()=>{
                setOpenDrawer(true);
            }}/>

            <Drawer
                open={openDrawer}
                onClose={()=>{
                    setOpenDrawer(false);
                }}
                PaperProps={{sx:drawerStyle}}
                style={{ zIndex:1500}}
            >
            <Header>
            <ArrowBackIcon onClick={()=>{
                setOpenDrawer(false);
            }}/>
            <Typography>Profile</Typography>
            </Header>
            <Component>
                <Profile accountInfo={account}/>
            </Component>
            </Drawer>
        </>
    );
}