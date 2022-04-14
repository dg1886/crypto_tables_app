import styled from "styled-components";

import { baseTheme } from "../../styles/theme";

const Tittle = styled.h2`
  color: ${({ theme, color }) => theme.colors.white || color};
  letter-spacing: ${baseTheme.letterSpacing.default};
  font-size: ${baseTheme.fontSize.large};
  font-weight: 300;
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
`;

export default Tittle;
