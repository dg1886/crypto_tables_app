import styled from "styled-components";

const CoinName = styled.p`
  color: ${({ theme }) => theme.colors.textColor};
  letter-spacing: ${({ theme }) => theme.letterSpacing.default};
  fonst-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: 200;
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
`;

export default CoinName;
