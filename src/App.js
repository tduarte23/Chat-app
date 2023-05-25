import react,{useEffect,useState} from 'react';
import {useAuthState} from "react-firebase-hooks/auth"
import {auth,db} from "./services/firebase"
import Login from "./components/Login/index"
import Loading from './components/Loading/index'
import Chat from './components/Chats/index';
import SideBar from './components/Sidebar';
import * as C from "./styles/app"

const App = () => {
  const [user, loading] = useAuthState(auth);
  const [userChat, setUserChat] = useState(null);

  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set({
        email: user.email,
        photoURL: user.photoURL,
      });
    }
  }, [user]);

  if (loading) return <Loading />;

  if (!user) return <Login />;

  return (
    <C.Container>
      <SideBar setUserChat={setUserChat} userChat={userChat} />
      <Chat userChat={userChat} />
    </C.Container>
  );
};

export default App;