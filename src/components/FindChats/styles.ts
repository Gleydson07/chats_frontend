import styled from 'styled-components';

export const Header = styled.header`
  color: var(--brown-700);
  font-weight: 500;
  font-size: var(--font-size-14);
  padding: 8px 12px;
`;

export const Container = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 16px;
  border-radius: 8px;
  background-color: var(--orange-500);
  box-shadow: inset 0px 0px 20px 0px var(--black-opacity-15);
  padding-right: 2px;
`;

export const MessagesWrapper = styled.div`
  height: calc(100% - 36px);
  overflow: auto;

  &::-webkit-scrollbar { 
    position: absolute;
    display: visible;
    width: 8px;
  }
  
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: var(--orange-600);
  }
  
  &::-webkit-scrollbar-track {
    background: transparent; 
  }
  
  &::-webkit-scrollbar-track-piece{
    background: transparent;
  }
`;

export const InputSearch = styled.input`
  height: 40px;
  width: 100%;
  border-radius: 4px;
  border: none;
  outline: none;
  padding: 4px 12px;
  background: var(--white-400);
  font-size: var(--font-size-14);

  &::placeholder {
    color: var(--gray-400);
  }
`;