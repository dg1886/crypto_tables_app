import styled from "styled-components";

import { baseTheme } from "../../styles/theme";

const Text = styled.span`
  color: ${baseTheme.colors.white};
  letter-spacing: ${baseTheme.letterSpacing.default};
  fonst-size: ${baseTheme.fontSize.normal};
  font-weight: 300;
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
`;

export default Text;
