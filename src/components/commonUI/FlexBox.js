import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  background-color: ${(props) => (props.bgColor ? props.bgColor : props.theme.colors.secondary)};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
  box-sizing: ${({ boxSizing }) => boxSizing || "border-box"};
  z-index: ${({ zIndex }) => zIndex};
`;

export default FlexBox;
