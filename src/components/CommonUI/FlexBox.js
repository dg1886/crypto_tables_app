import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height};
`;

export default FlexBox;
