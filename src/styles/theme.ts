import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root{
    --black-400: #1E1E1E;
    --black-200: #3a3a3a;
    --brown-700: #502614;
    --brown-400: #69331B;
    --brown-200: #a44f2b;
    --brown-100: #b05800;
    --orange-600: #b34a04;
    --orange-500: #eb6105;
    --orange-400: #ea7409;
    --orange-300: #f89236;
    --orange-200: #fbbb82;
    --orange-100: #F8EDE4;    
    --green-600: #0b7c07;
    --green-500: #0d960a;
    --green-400: #10ba0c;
    --green-200: #c5fbc4;
    --red-600: #ae0000;
    --red-500: #cc0000;
    --red-400: #f20000;
    --red-200: #ff7171;
    --gray-600: #4B4643;
    --gray-500: #8a837d;
    --gray-300: #c8c8c8;
    --gray-400: #bcbcbc;
    --gray-200: #E3E2E1;
    --gray-100: #efefef;
    --white-400: #F7F7F7;
    --white-opacity-75: rgba(247, 247, 247, 0.75);
    --white-opacity-50: rgba(247, 247, 247, 0.50);
    --white-opacity-15: rgba(247, 247, 247, 0.15);
    --white-opacity-10: rgba(247, 247, 247, 0.10);
    --black-opacity-75: rgba(0, 0, 0, 0.75);
    --black-opacity-50: rgba(0, 0, 0, 0.5);
    --black-opacity-35: rgba(0, 0, 0, 0.35);
    --black-opacity-15: rgba(0, 0, 0, 0.15);
    --transparent: transparent;
    --font-size-4: 0.25rem;
    --font-size-9: 0.56rem;
    --font-size-10: 0.625rem;
    --font-size-12: 0.75rem;
    --font-size-14: 0.875rem;
    --font-size-16: 1rem;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 93.75%;
    scroll-behavior: smooth;
  }

  body{
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: var(--black-400); 
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--black-400);
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`