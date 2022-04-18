import styled from "styled-components";

export const TextRegular = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: normal;
  font-style: normal;
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: ${({ color, theme }) => theme.colors[color] || theme.colors.white};
  letter-spacing: ${({ theme }) => theme.letterSpacing.default};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  user-select: ${({ userSelect }) => userSelect || "auto"}
`;
