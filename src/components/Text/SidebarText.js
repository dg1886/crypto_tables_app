import styled from "styled-components";

export const SidebarText = styled.span`
  font-family: "Gilroy", sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: ${({ checked, theme }) => (checked ? theme.colors.white : theme.colors.lightGrey)};
  letter-spacing: ${({ theme }) => theme.letterSpacing.default};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  user-select: none;
`;
