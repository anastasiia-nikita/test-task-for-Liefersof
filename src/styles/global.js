import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: sans-serif;
  }

  body {
    // background-color: ${({ theme }) => theme.colors.bg};
    // background: linear-gradient(to right, rgba(255,0,0,0), rgba(93, 173, 226, 1));
    display: grid;
    place-content: center;
    // text-align: center;
    margin: 0;
  }
`

export default GlobalStyle;