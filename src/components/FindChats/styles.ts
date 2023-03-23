import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 16px;
  border-radius: 8px;
  background-color: var(--white-opacity-15);
`;

export const InputSearch = styled.input`
  height: 40px;
  width: 100%;
  border-radius: 4px;
  border: none;
  outline: none;
  padding: 4px 12px;
  background: var(--white-400);
  font-size: 14px;

  &::placeholder {
    color: var(--gray-400);
  }
`;