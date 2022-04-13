import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  background-color: ${({ backColor, theme }) => backColor || theme.colors.dark};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
  box-sizing: ${({ boxSizing }) => boxSizing || "border-box"};
  border-radius:${({ radius }) => radius};
  overflow:${({ overFlow }) => overFlow || "hidden"};
`;

export default FlexBox;
