import styled from "styled-components";

export const TextSmall = styled.span`
  font-family: "Gilroy", sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ color, theme }) => color || theme.colors.white};
  letter-spacing: ${({ theme }) => theme.letterSpacing.default};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;
