import React from 'react';
import { ChatBox } from '../ChatBox';

import {
  Container, InputSearch
} from './styles';

interface FindChatsProps {
  show: boolean;
  minimize: () => void;
}

export const FindChats:React.FC<FindChatsProps> = ({show, minimize}) => {

  return (
    <ChatBox
      show={show}
      onClickMinimize={minimize}
    >
      <InputSearch placeholder='Pesquise por grupos ou pessoas'/>
      <Container>
        
      </Container>
    </ChatBox>
  )
}
