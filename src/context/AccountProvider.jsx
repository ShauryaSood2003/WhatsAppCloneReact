import { createContext ,useState,useEffect,useRef} from "react";
import { io } from "socket.io-client"

export const AccountContext =createContext(null);


function AccountProvider({children}){

    const socket=useRef();

    useEffect(()=>{
        socket.current=io("ws://localhost:9000");
    },[])
    const [account,setAccount]=useState();
    const [person,setPerson]=useState({});
    const [activeUser,setActiveUser]=useState([]);
    const [newMessageFlag,setNewMessageFlag]=useState(false);

    return(
        <AccountContext.Provider value={{
            account,
            setAccount,
            person,
            setPerson,
            socket,
            activeUser,
            setActiveUser,
            newMessageFlag,
            setNewMessageFlag
        }}>
        {children}
        </AccountContext.Provider>
    );
}
export default AccountProvider;