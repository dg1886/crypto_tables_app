import styled from "styled-components";

import { baseTheme } from "../../styles/theme";

const CoinName = styled.p`
  color: ${baseTheme.colors.white};
  letter-spacing: ${baseTheme.letterSpacing.default};
  fonst-size: ${baseTheme.fontSize.normal};
  font-weight: 200;
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
`;

export default CoinName;
