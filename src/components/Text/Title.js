import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Gilroy", sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: ${({ theme }) => theme.fontSize.extraLarge};
  color: ${({ color, theme }) => color || theme.colors.white};
  letter-spacing: ${({ theme }) => theme.letterSpacing.default};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;
