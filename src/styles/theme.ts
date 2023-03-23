import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root{
    --black-400: #1E1E1E;
    --brown-400: #69331B;
    --green-400: #13e20e;
    --green-200: #c5fbc4;
    --orange-400: #F67B09;
    --orange-300: #E9BA8F;
    --orange-200: #F4D3B4;
    --orange-100: #F8EDE4;
    --gray-600: #4B4643;
    --gray-400: #C2C2C2;
    --gray-200: #E3E2E1;
    --white-400: #F7F7F7;
    --white-opacity-75: rgba(247, 247, 247, 0.75);
    --white-opacity-50: rgba(247, 247, 247, 0.50);
    --white-opacity-15: rgba(247, 247, 247, 0.15);
    --black-opacity-75: rgba(0, 0, 0, 0.75);
    --black-opacity-50: rgba(0, 0, 0, 0.5);
    --black-opacity-35: rgba(0, 0, 0, 0.35);
    --black-opacity-15: rgba(0, 0, 0, 0.15);
    --transparent: transparent;
    --font-size-4: 0.25rem;
    --font-size-8: 0.5rem;
    --font-size-12: 0.75rem;
    --font-size-16: 1rem;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }
    @media(max-width: 720px) {
      font-size: 87.5%;
    }
    @media(max-width: 600px) {
      font-size: 81.25%;
    }

    scroll-behavior: smooth;
  }

  body{
    font-family: 'Roboto', sans-serif;

    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;

    &::-webkit-scrollbar { 
      position: absolute;
      display: visible;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: var(--black-400); 
      border-radius: 4px; 
      border: 1px solid var(--black-400);
    }
    
    &::-webkit-scrollbar-track {
      background: var(--black-400); 
    }
    
    &::-webkit-scrollbar-track-piece{
      background: transparent;
    }
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