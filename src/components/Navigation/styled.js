import styled from "styled-components";

export const NavigationItemWrap = styled.div`
  width: 100%;
  height: 3.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ isActive, theme }) => (isActive ? theme.colors.buttonColor : "transparent")};
  border-radius: 0.6rem;
  cursor: pointer;
  margin-top: 0.5rem;
  padding: 0 0.6rem;
  box-sizing: border-box;
  
`;
