import styled from "styled-components";

export const SidebarTabWrapper = styled.div`
  width: 90%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ checked, theme }) => (checked ? theme.colors.pink : "transparent")};
  border-radius: 10px;
  cursor: pointer;
  margin-top: 30px;
  padding: 0 10px;
`;
