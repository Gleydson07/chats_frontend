import React, {useState} from 'react';
import { HiTrash } from 'react-icons/hi';
import { Modal } from '../../Modal';

import {
  Avatar,
  ButtonDeleteChat,
  Container,
  Content,
  Footer,
  LastMessage,
  Metadata,
  Timestamp,
  Unread,
  Username
} from './styles';

export interface MenuMessageOptionProps {
  id: number,
  username: string,
  avatar: string,
  lastMessage: string,
  timestamp: string,
  unread: number,
  onClick: (id: number) => void;
  onClickDeleteChat: (id: number) => void;
}

export const MenuMessageOption:React.FC<MenuMessageOptionProps> = ({
  id,
  username,
  avatar,
  lastMessage,
  timestamp,
  unread,
  onClick,
  onClickDeleteChat,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Container>
        <Avatar src={avatar} alt="Imagem do usuário"/>
        <Content onClick={() => onClick(id)}>
          <Username title={username}>{username}</Username>
          <Metadata>
            <LastMessage>{lastMessage}</LastMessage>
            <Timestamp>{timestamp}</Timestamp>
          </Metadata>
        </Content>
        <Footer>
          {unread ? <Unread>{unread}</Unread> : <></>}
          <ButtonDeleteChat
            onClick={() => setShowModal(true)}
            title="Excluir conversa"
          >
            <HiTrash />
          </ButtonDeleteChat>
        </Footer>
      </Container>

      <Modal
        isOpen={showModal}
        title={`Excluir conversa com ${username.split(' ')[0]}`}
        description="Tem certeza que deseja excluir essa conversa?"
        confirmLabel="Excluir"
        confirmTheme="danger"
        onConfirm={() => onClickDeleteChat(id)}
        onClose={() => setShowModal(false)}
      />
    </>
  )
}
