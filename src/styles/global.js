import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
  }

  body {
    display: grid;
    place-content: center;
    // text-align: center;
    margin: 0;
  }
`

export default GlobalStyle;