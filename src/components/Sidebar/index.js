import React from 'react'
import * as C from './styles'
import SideBarChats from './SideBarChats'
import SideBarHeader from './SidebarHeader'


const SideBar = ({setUserChat,userChat}) => {
  return (
    <C.Container>
        <SideBarHeader setUserChat={setUserChat} />
        <SideBarChats setUserChat={setUserChat} userChat={userChat} />
    </C.Container>
  )
}

export default SideBar
