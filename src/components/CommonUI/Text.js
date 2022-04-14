import styled from "styled-components";

const Text = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;    
  letter-spacing: ${({ theme }) => theme.letterSpacing.default};
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  margin: ${({ margin }) => margin}; 
  padding: ${({ padding }) => padding}; 
  height:${({ height }) => height};
  user-select:${({ userSelect }) => userSelect};
`;

export default Text;
