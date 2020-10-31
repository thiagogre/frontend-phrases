import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Itim';
    margin: 0;
    border-box: none;
  }
  html {
    background-image: linear-gradient(#593E1A, blanchedalmond);
    background-size: cover;
    height: 100vh;
  }
`