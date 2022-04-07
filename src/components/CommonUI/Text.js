import styled from "styled-components";

const Text = styled.span`
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: ${({ theme }) => theme.letterSpacing.default};
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: 300;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  height:${({ height }) => height};
`;

export default Text;
