import React from 'react';
import { MenuMessageOption, MenuMessageOptionProps } from './MenuMessageOption';

import {
  Container
} from './styles';

interface MenuMessagesProps {
  chats: MenuMessageOptionProps[]
}

export const MenuMessages:React.FC<MenuMessagesProps> = ({chats}) => {

  return (
    <Container>
      {chats.map(chat => (
        <MenuMessageOption
          key={chat.id}
          id={chat.id}
          username={chat.username}
          avatar={chat.avatar}
          lastMessage={chat.lastMessage}
          timestamp={chat.timestamp}
          unread={chat.unread}
          onClickDeleteChat={chat.onClickDeleteChat}
          onClick={chat.onClick}
        />
      ))}
    </Container>
  )
}
