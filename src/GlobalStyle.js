import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  font-size: 16px;
  @media (max-width: 450px) {
    font-size: 6px;
  }
}
  body {
    background-color: ${({ theme }) => (theme.colors.background)};
    width: 100vw;
    height: 100vh;
  }

`;
