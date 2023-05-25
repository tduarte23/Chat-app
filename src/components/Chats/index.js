import React from "react";
import ChatHeader from "./ChatsHeader/index";
import * as C from "./styles";
import ChatBody from "./ChatBody/index";
import ChatFooter from "./ChatFooter/index";
import Default from "../Default/index";

const Chat = ({ userChat }) => {
  if (!userChat) return <Default />;

  return (
    <C.Container>
      {console.log("entrou")}
      <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name} />
      <ChatBody chatId={userChat?.chatId} />
      <ChatFooter chatId={userChat?.chatId} />
    </C.Container>
  );
};

export default Chat;