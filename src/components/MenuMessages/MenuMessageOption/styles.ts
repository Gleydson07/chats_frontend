import styled from 'styled-components';

export const Avatar = styled.img`
  width: 45px;
  height: 45px;
  object-fit: cover;
`;

export const Content = styled.div`
  overflow: hidden;
  padding: 4px 8px;
  width: 185px;
`;

export const Metadata = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  overflow: hidden;
`;

export const Username = styled.title`
  display: block;
  font-family: 'Roboto', sans-serif;
  font-size: var(--font-size-14);
  font-weight: 500;
  color: var(--brown-700);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 1;
`;

export const LastMessage = styled(Username).attrs({ as: 'span' })`
  font-size: var(--font-size-12);
  font-weight: 400;
  color: var(--orange-200);
`;

export const Timestamp = styled(Username).attrs({ as: 'small' })`
  font-size: var(--font-size-10);
  color: var(--orange-200);
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 1;
  border-left: 1px solid transparent;

  `;

export const Unread = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  
  content: '';
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: var(--font-size-12);
  font-weight: 500;
  border: 1px solid var(--orange-200);
  background-color: var(--orange-400);
  color: var(--white-400);
`;

export const ButtonDeleteChat = styled.button`
  display: none;
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 45px;
  width: calc(100% - 16px);
  overflow: hidden;
  border-radius:4px;
  background-color: var(--white-opacity-10);
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.15);
  margin-bottom: 4px;
  transition: border-left 0.2s ease-in-out;
  
  &:hover {
    background-color: var(--orange-200);

    ${LastMessage}, ${Timestamp} {
      color: var(--orange-600);
    }

    ${Footer} {
      border-left: 1px dashed var(--brown-400);
      background-color: var(--orange-300);

      ${Unread} {
        display: none;
      }

      ${ButtonDeleteChat} {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--white-400);
        border: 1px solid var(--white-400);
        border-radius: 50%;
        width: 18px;
        height: 18px;
        background: transparent;
        outline: none;
        cursor: pointer;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;