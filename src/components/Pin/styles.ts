import styled, { css, keyframes } from 'styled-components';

interface HomeProps {
  show: boolean;
}

const fadeOut = keyframes`
  0% { 
    opactity: 100%;
  }
  100% {
    opacity: 0%;    
    pointer-events: none;
  }
`;

const fadeIn = keyframes`
  100% { 
    opactity: 0%;
  }
  0% {
    opacity: 100%;
  }
`;

const pulsate = keyframes`
  0% { 
    transform: scale(0.95, 0.95);
  }
  50% {
    transform: scale(1.1, 1.1);
  }
  100% {
    transform: scale(0.95, 0.95);
  }
`;

export const Wrapper = styled.figure<HomeProps>`
  position: relative;
  animation: ${fadeIn} 0.5s ease-in forwards;
  
  ${({ show }) => !show && css`
    animation: ${fadeOut} 0.5s ease-out forwards;
  `}
  
  svg {
    cursor: pointer;
    filter: drop-shadow(2px 8px 4px var(--black-opacity-50));
  }
`;

export const ChatPending = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Roboto", sans-serif;
  font-size: var(--font-size-12);
  font-weight: 500;
  color: var(--white-400);

  content: '';
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid var(--white-400);
  background-color: var(--brown-400);
  transition: all 1.25s ease-out forwards;
  box-shadow: 0 0 2px var(--black-opacity-50);

  pointer-events: none;

  &.pulsar {
    width: 22px;
    height: 22px;
    animation: ${pulsate} 1.25s ease-out;
    animation-iteration-count: infinite; 
  }
`;