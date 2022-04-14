import styled from "styled-components";

const Tittle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: ${({ theme }) => theme.letterSpacing.default};
  fonst-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 400;
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
`;

export default Tittle;
