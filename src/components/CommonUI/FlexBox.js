import styled from "styled-components";

import { baseTheme } from "../../styles/theme";

const FlexBox = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  background-color: ${({ backColor }) => (backColor || baseTheme.colors.dark)};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
  box-sizing: ${({ boxSizing }) => boxSizing || "border-box"};
  border:${({ border }) => border};
  border-radius:${({ radius }) => radius};
`;

export default FlexBox;
