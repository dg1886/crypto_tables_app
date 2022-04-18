import styled from "styled-components";

export const SidebarText = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: bold;
  font-style: normal;
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: ${({ isActive, theme }) => (isActive ? theme.colors.sideBarTextActive : theme.colors.sideBarTextNoActive)};
  letter-spacing: ${({ theme }) => theme.letterSpacing.default};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  text-transform: capitalize;
  user-select: none;
`;
