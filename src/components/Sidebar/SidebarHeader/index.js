import React from 'react'
import * as C from "./styles"
import {MdDonutLarge,MdChat,MdMoreVert} from "react-icons/md"
import * as EmailValidator from "email-validator"
import {auth,db} from "../../../services/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'
import {useCollection} from 'react-firebase-hooks/firestore'

const SideBarHeader = ({setUserChat}) => {

  const [user] = useAuthState(auth);
  const refChat = db.collection("chats")
                  .where("users","array-contains",user.email)
  const [chatsSnapShot] = useCollection(refChat);

  const handleCreate = () => {
    const emailInput  = prompt("escreva o email desejado");

    if (!emailInput) return ;

    if (!EmailValidator.validate(emailInput)){
      return alert("Email invalid");
    }else if (emailInput === user.email){
      return alert("Email already exists");
    }else if (chatExists(emailInput)){
      return alert("You already have this chat");
    }

    db.collection("chats").add({
      users: [user.email,emailInput]
    })

  }

  const chatExists = (emailChat) => {
    return !!chatsSnapShot?.docs.find(
      (chat) => chat.data().users.find((user) => user === emailChat)?.lenght > 0
    )
  }

  return (
    <C.Container>
        <C.Avatar src={user?.photoURL} 
         onClick={()=>[auth.signOut(), setUserChat(null)]}
        />
        <C.Options>
          <MdDonutLarge/>
          <MdChat onClick={handleCreate}/>
          <MdMoreVert />
        </C.Options >
    </C.Container>
  )
}

export default SideBarHeader
