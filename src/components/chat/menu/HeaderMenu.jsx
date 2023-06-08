
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { styled } from '@mui/material';

const MenuOptions=styled(MenuItem)`
    font-size:15px;
    padding:10px 60px 5px 24px;
    color:#4A4A4A;

`

export default function HeaderMenu({setOpenDrawer}){
    const [open,setOpen]=useState(null);
    function handleClose(){
        setOpen(null);
    }
    function handleOpen(e){
        setOpen(e.currentTarget);
    }
    return(
        <>
        <MoreVertIcon  
        onClick={handleOpen}
        />
        <Menu
        open={open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{
            vertical:'bottom',
            horizontal:'center'
        }}
        transformOrigin={{
            vertical:"top",
            horizontal:"right"
        }}

        >
            <MenuOptions onClick={()=>{
                handleClose();
                setOpenDrawer(true);
            }}>Profile</MenuOptions>
            <MenuOptions onClick={handleClose}>My Account</MenuOptions>
            <MenuOptions onClick={handleClose}>Log Out</MenuOptions>
        </Menu>
        </>
    );
}
