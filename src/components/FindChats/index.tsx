import React from 'react';
import { ChatBox } from '../ChatBox';
import { MenuMessages } from '../MenuMessages';

import {
  Container, Header, InputSearch, MessagesWrapper
} from './styles';

interface FindChatsProps {
  show: boolean;
  minimize: () => void;
}

const messageList = {
  total: 7,
  data: [
    {
      id: 1,
      username: "Allyne Albuquerque da Silva Santos",
      avatar: "https://avatars.githubusercontent.com/u/54643580?v=4",
      lastMessage: "Olá, tudo bem? Eu sou o Allyne, seu novo amigo virtual.",
      timestamp: Intl.DateTimeFormat('pt-BR', {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      }).format(new Date()),
      unread: 5,
      onClick: () => console.log(`Click chat ${1}`),
      onClickDeleteChat: () => console.log(`Delete chat ${1}`),
    },
    {
      id: 2,
      username: "Maria Heloísa Albuquerque da Silva Santos",
      avatar: "https://avatars.githubusercontent.com/u/54643580?v=4",
      lastMessage: "Pai, me dá dinheiro?",
      timestamp: Intl.DateTimeFormat('pt-BR', {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "numeric"
      }).format(new Date()),
      unread: 3,
      onClick: () => console.log(`Click chat ${2}`),
      onClickDeleteChat: () => console.log(`Delete chat ${2}`),
    },
    {
      id: 3,
      username: "João Miguel Albuquerque da Silva Santos",
      avatar: "https://avatars.githubusercontent.com/u/54643580?v=4",
      lastMessage: "Pai, compra um brinquedo?",
      timestamp: Intl.DateTimeFormat('pt-BR', {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "numeric"
      }).format(new Date()),
      unread: 0,
      onClick: () => console.log(`Click chat ${3}`),
      onClickDeleteChat: () => console.log(`Delete chat ${3}`),
    },
    {
      id: 4,
      username: "Audeneide Albuquerque Santos",
      avatar: "https://avatars.githubusercontent.com/u/54643580?v=4",
      lastMessage: "Filho, vou lhe visitar",
      timestamp: Intl.DateTimeFormat('pt-BR', {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "numeric"
      }).format(new Date()),
      unread: 0,
      onClick: () => console.log(`Click chat ${4}`),
      onClickDeleteChat: () => console.log(`Delete chat ${4}`),
    },
    {
      id: 5,
      username: "Audeneide Albuquerque Santos",
      avatar: "https://avatars.githubusercontent.com/u/54643580?v=4",
      lastMessage: "Filho, vou lhe visitar",
      timestamp: Intl.DateTimeFormat('pt-BR', {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "numeric"
      }).format(new Date()),
      unread: 0,
      onClick: () => console.log(`Click chat ${4}`),
      onClickDeleteChat: () => console.log(`Delete chat ${4}`),
    },
    {
      id: 6,
      username: "Audeneide Albuquerque Santos",
      avatar: "https://avatars.githubusercontent.com/u/54643580?v=4",
      lastMessage: "Filho, vou lhe visitar",
      timestamp: Intl.DateTimeFormat('pt-BR', {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "numeric"
      }).format(new Date()),
      unread: 0,
      onClick: () => console.log(`Click chat ${4}`),
      onClickDeleteChat: () => console.log(`Delete chat ${4}`),
    },
    {
      id: 7,
      username: "Audeneide Albuquerque Santos",
      avatar: "https://avatars.githubusercontent.com/u/54643580?v=4",
      lastMessage: "Filho, vou lhe visitar",
      timestamp: Intl.DateTimeFormat('pt-BR', {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "numeric"
      }).format(new Date()),
      unread: 0,
      onClick: () => console.log(`Click chat ${4}`),
      onClickDeleteChat: () => console.log(`Delete chat ${4}`),
    }
  ]
}

export const FindChats:React.FC<FindChatsProps> = ({show, minimize}) => {

  return (
    <ChatBox
      show={show}
      onClickMinimize={minimize}
    >
      <InputSearch placeholder='Pesquise por grupos ou pessoas'/>
      <Container>
        <Header>Chats({messageList.total})</Header>
        
        <MessagesWrapper>
          <MenuMessages chats={messageList.data}/>
        </MessagesWrapper>
      </Container>
    </ChatBox>
  )
}
