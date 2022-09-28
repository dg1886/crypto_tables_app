import styled from "styled-components";

export const AppWrapper = styled.div`
  min-height: 58.1rem;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
`;

export const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 1.5rem 0.5rem 2rem;
  box-sizing: border-box;
  overflow: hidden;
  @media (max-width: 450px) {
    padding: 0;
  }
`;
