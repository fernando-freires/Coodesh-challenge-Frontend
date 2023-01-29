import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-color: transparent;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

`;

export default GlobalStyle;
