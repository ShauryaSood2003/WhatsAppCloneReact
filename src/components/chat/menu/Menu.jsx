import Header from "./Header";
import Search from "./Search";
import Conversation from "./Conversation";
import { useState } from "react";

function Menu(){
    const [text,setText]=useState('');

    return(
        <>
        <Header/>
        <Search setText={setText}/>
        <Conversation text={text}/>
        </>
    );
}
export default Menu;