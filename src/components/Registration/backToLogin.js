import styled from "styled-components";

const BackLog = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  letter-spacing: ${({ theme }) => theme.letterSpacing.default};
  fonst-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 200;
  border:none;
  border-bottom: 2px solid #ffffffb5;
  padding: 1.25rem 0 0.313rem 0 ;
  cursor: pointer;
`;

export default BackLog;
