import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    // background-color: ${({ theme }) => theme.colors.bg};
    // background: linear-gradient(to right, rgba(255,0,0,0), rgba(93, 173, 226, 1));
    display: grid;
    place-content: center;
    // text-align: center;
    font-family: sans-serif;
  }
`

export default GlobalStyle;