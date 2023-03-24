import styled, { css } from 'styled-components';

interface HomeProps {
  show: boolean;
}

export const Container = styled.section<HomeProps>`
  position: absolute;
  width: 40px;
  height: 40px;
  bottom: 24px;
  right: 16px;
  background: var(--orange-400);
  border-radius: 8px;
  transition: all 0.5s ease-in-out;
  
  ${({ show }) => show && css`
    bottom: 0;
    right: 0;
    width: 320px;
    height: 450px;
    box-shadow: 0px 2px 6px var(--black-opacity-50);
  `}
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
`;

export const ButtonControl = styled.button`
  background: transparent;
  border: none;
  color: var(--white-400);
  margin-right: 4px;
  transition: all 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  padding: 8px;
`;