import React, {useState} from 'react';
import { ballon } from '../../assets/svgs';

import {
  ChatPending,
  Wrapper
} from './styles';

interface PinProps {
  show: boolean;
  onClick: () => void;
}

export const Pin:React.FC<PinProps> = ({show, onClick}) => {
  const [count] = useState(1);
  const [isAnimated] = useState(false);

  return (
    <Wrapper
      show={show}
      onClick={onClick}
    >
      {ballon}

      {!count ? <></> : (
        <ChatPending className={isAnimated ? 'pulsar' : ''}>
          {count > 9 ? "+9" : count}
        </ChatPending>
      )}
    </Wrapper>
  )
}
