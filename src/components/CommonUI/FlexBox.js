import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  background-color: ${({ backColor, theme }) => backColor || theme.colors.dark};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  box-sizing: ${({ boxSizing }) => boxSizing || "border-box"};
  border:${({ border }) => border};
  border-radius:${({ radius }) => radius};
`;

export default FlexBox;
