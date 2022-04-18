import styled from "styled-components";

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: bold;
  font-style: normal;
  font-size: ${({ theme }) => theme.fontSize.extraLarge};
  color: ${({ color, theme }) => color || theme.colors.textColor};
  letter-spacing: ${({ theme }) => theme.letterSpacing.default};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  user-select: ${({ userSelect }) => userSelect}
`;
