import styled from 'styled-components';
import { ButtonTheme } from '.';

interface ButtonProps {
  theme: ButtonTheme;
}

const buttonTheme: any = {
  confirm: {
    background: 'var(--green-400)',
    color: 'var(--white-400)',
    background_hover: 'var(--green-500)',
    color_hover: 'var(--white-400)',
    background_disabled: 'var(--green-200)',
    color_disabled: 'var(--green-600)',
    background_active: 'var(--green-600)',
    color_active: 'var(--white-400)',
  },
  danger: {
    background: 'var(--red-400)',
    color: 'var(--white-400)',
    background_hover: 'var(--red-500)',
    color_hover: 'var(--white-400)',
    background_disabled: 'var(--red-200)',
    color_disabled: 'var(--red-600)',
    background_active: 'var(--red-600)',
    color_active: 'var(--white-400)',
  },
  default: {
    background: 'var(--white-400)',
    color: 'var(--gray-600)',
    background_hover: 'var(--gray-200)',
    color_hover: 'var(--gray-600)',
    background_disabled: 'var(--gray-100)',
    color_disabled: 'var(--gray-400)',
    background_active: 'var(--gray-300)',
    color_active: 'var(--gray-600)',
  },
};

export const OverLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 250px;
  min-height: 150px;
  border-radius: 4px;
  padding: 8px;
  background-color: var(--white-400);
  box-shadow: 0px 0px 10px 10px var(--black-opacity-15);
`;

export const Title = styled.h4`
  font-size: var(--font-size-14);
  color: var(--black-400);
  padding: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Description = styled.p`
  font-size: var(--font-size-16);
  font-weight: 400;
  color: var(--gray-500);
  margin: 8px 12px;
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  padding: 8px 0;
  width: calc(100% - 16px);
  border-top: 1px solid var(--gray-200);
`;

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  min-width: 70px;
  padding: 4px 8px;
  border-radius: 4px;
  border: none;
  outline: none;
  background: ${({ theme }) => buttonTheme[theme]?.background};
  color: ${({ theme }) => buttonTheme[theme]?.color};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  & + & {
    margin-left: 8px;
  }

  &:hover {
    background: ${({ theme }) => buttonTheme[theme]?.background_hover};
    color: ${({ theme }) => buttonTheme[theme]?.color_hover};
  }

  &:active {
    background: ${({ theme }) => buttonTheme[theme]?.background_active};
    color: ${({ theme }) => buttonTheme[theme]?.color_active};
  }

  &:disabled {
    background: ${({ theme }) => buttonTheme[theme]?.background_disabled};
    color: ${({ theme }) => buttonTheme[theme]?.color_disabled};
    cursor: not-allowed;
  }
`;