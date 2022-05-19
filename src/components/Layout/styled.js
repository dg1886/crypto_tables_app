import styled from "styled-components";

export const GlobalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ backColor, theme }) => theme.colors[backColor] || theme.colors.background};
`;

export const AppWrapper = styled.div`
  max-width: 100vw;
  max-height: 62.5rem;
  min-width: 100vw;
  min-height: 58.1rem;
  height: 100%;
  margin: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
`;
