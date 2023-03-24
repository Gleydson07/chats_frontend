import {useState} from 'react';
import { FindChats } from '../../components/FindChats';
import { Pin } from '../../components/Pin';

import {
  Container,
} from './styles';

export const Home = () => {
  // const [count, setCount] = useState(1);
  // const [isAnimated, setIsAnimated] = useState(false);
  const [showFindChats, setShowFindChats] = useState(false);

  const handleShowFindChats = () => {setShowFindChats(true)}
  const handleHiddenFindChats = () => {setShowFindChats(false)}

  return (
    <Container>
      <FindChats
        show={showFindChats}
        minimize={handleHiddenFindChats}
      />

      <Pin
        show={!showFindChats}
        onClick={handleShowFindChats}
      />
    </Container>
  )
}
