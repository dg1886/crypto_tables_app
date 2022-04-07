import styled from "styled-components";

import { baseTheme } from "../../styles/theme";

const Tittle = styled.h2`
  color: ${baseTheme.colors.white};
  letter-spacing: ${baseTheme.letterSpacing.default};
  fonst-size: ${baseTheme.fontSize.large};
  font-weight: 400;
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
`;

export default Tittle;
