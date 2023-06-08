import { useEffect,useState,useContext} from "react";
import {Box,Divider,styled} from "@mui/material";


import { GetUser } from "../../../service/api";
import Conversations from "./Conversations";
import { AccountContext } from "../../../context/AccountProvider";

const Component=styled(Box)`
    height:81vh;
    overflow:overlay;
`
const StyledDivider=styled(Divider)`
    margin:0 0 0 70px;
    background:#e9edef;
`


export default function Conversation({text}){

    const [users,setUsers]=useState([]);
    const {account,socket,setActiveUser}=useContext(AccountContext);
    useEffect(()=>{
        const fetchData=async ()=>{
            let response = await GetUser();
            const filterData=response.filter(users => users.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filterData);
        }
        fetchData();
    },[text]);

    
    useEffect(()=>{
        socket.current.emit("addUsers",account);   
        socket.current.on("getUsers",users =>{
            setActiveUser(users);
        });
    },[account,socket,setActiveUser]);

    return(
        <Component>
                { 
                    users.map((user,index)=>(
                        user.sub !== account.sub &&
                        <>
                            <Conversations key={index} user={user}/>
                            <StyledDivider/>
                        </>
                    ))
                }
        </Component>
    );
}