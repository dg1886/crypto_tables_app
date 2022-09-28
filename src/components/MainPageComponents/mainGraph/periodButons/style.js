import styled from "styled-components";

const PeriodButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.3rem;
  background-color: ${({ theme, isActive }) => (isActive ? theme.colors.backgroundItems : "transparent")};
  width: 4rem;
  height: 2rem;
  margin-left: 1.5rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  z-index: 1;
`;

export default PeriodButton;
