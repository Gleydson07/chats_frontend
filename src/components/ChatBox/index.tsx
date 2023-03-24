import React, {ReactNode} from 'react';
import { MdOutlineMinimize } from 'react-icons/md';

import {
  ButtonControl,
  Container,
  ContentWrapper,
  Header
} from './styles';

interface ChatBoxProps {
  show: boolean;
  children: ReactNode,
  onClickMinimize: () => void;
}

export const ChatBox:React.FC<ChatBoxProps> = ({show, children, onClickMinimize}) => {

  return (
    <Container
      show={show}
    >
      <Header>
          <ButtonControl
            onClick={onClickMinimize}
          >
            <MdOutlineMinimize size={24}/>
          </ButtonControl>
      </Header>
      <ContentWrapper
        id="chat-box"
      >
        {children}
      </ContentWrapper>
    </Container>
  )
}
  