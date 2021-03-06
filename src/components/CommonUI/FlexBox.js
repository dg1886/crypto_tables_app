import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  background-color: ${({ backColor, theme }) => theme.colors[backColor] || theme.colors.background};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  box-sizing: ${({ boxSizing }) => boxSizing || "border-box"};
  border: ${({ border }) => border};
  border-radius: ${({ radius }) => radius};
  overflow: ${({ overFlow }) => overFlow || "hidden"};
  z-index: ${({ zIndex }) => zIndex};
  position: ${({ position }) => position};
  max-width: ${({ maxWidth }) => maxWidth};
  min-width: ${({ minWidth }) => minWidth};
`;

export default FlexBox;
