import React from "react";
import * as C from "./styles";
import { MdPerson, MdMoreVert, MdSearch } from "react-icons/md";

const ChatsHeader = ({photoURL,name}) => {
  return (
    <C.Container>
        <C.UserInfo>
            {photoURL ? <C.Avatar src={photoURL} alt="avatar" /> : <MdPerson/>}
            <C.NameContent>
                <C.Name>{name}</C.Name>
            </C.NameContent>
        </C.UserInfo>
        <C.Options>
            <MdSearch />
            <MdMoreVert />
        </C.Options>
    </C.Container>
  )
}

export default ChatsHeader
