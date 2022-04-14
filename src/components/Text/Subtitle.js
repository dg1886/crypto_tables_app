import styled from "styled-components";

export const Subtitle = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: 600;
  font-style: normal;
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ color, theme }) => color || theme.colors.white};
  letter-spacing: ${({ theme }) => theme.letterSpacing.default};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;
