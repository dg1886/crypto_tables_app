import styled from "styled-components";

const Text = styled.span`
  color: ${({ theme, color }) => theme.colors.white || color};
  letter-spacing: ${({ theme }) => theme.letterSpacing.default};
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: 300;
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
`;

export default Text;
