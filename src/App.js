import { GoogleOAuthProvider } from '@react-oauth/google';
import "./css/App.css";
import Messenger from "./components/Messenger";
import { clientId } from './constants/data';
import AccountProvider from './context/AccountProvider';

function App() {
 
  return (
    <GoogleOAuthProvider clientId={clientId}>
    <AccountProvider>
     <Messenger/>
     </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
