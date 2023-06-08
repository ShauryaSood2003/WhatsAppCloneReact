import { Box, Typography ,styled} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const Container=styled(Box)`
    display:flex;
    align-items:center;
    height:44px;
    background:#ededed;
    padding:8px 16px;
`
const StyledImage=styled('img')({
    height:40,
    width:40,
    borderRadius:"50%"
})

const Name=styled(Typography)`
    margin-left:12px;
`
const Status=styled(Typography)`
    margin-left:12px;
    font-size:12px;
    color:rgb(0,0,0,0.6);
`

const IconsContainer=styled(Box)`
    margin-left:auto;
    & > *{
        padding:0 8px;
        font-size:24px;
        color:black;
    }
`

export default function ChatHeader({person}){

    const {activeUser}=useContext(AccountContext);

    return(
        <Container>
            <StyledImage src={person.picture} alt="dp"/>
            <Box>
                <Name>{person.name}</Name>
                <Status>{activeUser?.find(user => user.sub === person.sub)? "Online" : "Offline"}</Status>
            </Box>
            <IconsContainer>
                <SearchIcon />
                <MoreVertIcon/>
            </IconsContainer>
        </Container>
    );
}