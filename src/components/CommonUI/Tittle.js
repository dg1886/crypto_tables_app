import styled from "styled-components";

const Tittle = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;
  color: ${({ theme }) => theme.colors.textColor};
  letter-spacing: ${({ theme }) => theme.letterSpacing.default};
  fonst-size: ${({ theme }) => theme.fontSize.large};
  font-weight: Bold;
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
  user-select:${({ userSelect }) => userSelect};
`;

export default Tittle;
