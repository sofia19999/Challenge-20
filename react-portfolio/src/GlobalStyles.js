import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #F0F4F8;
    color: #2E2E2E;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease-in-out;
  }

  button {
    background-color: #FF6B6B;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }

  button:hover {
    background-color: #FF8585;
  }
`;

export default GlobalStyles;