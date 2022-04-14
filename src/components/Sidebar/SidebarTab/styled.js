import styled from "styled-components";

export const SidebarTabWrapper = styled.div`
  width: 100%;
  height: 3.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ checked, theme }) => (checked ? theme.colors.pink : "transparent")};
  border-radius: 0.6rem;
  cursor: pointer;
  margin-top: 0.5rem;
  padding: 0 0.6rem;
  box-sizing: border-box;
`;
