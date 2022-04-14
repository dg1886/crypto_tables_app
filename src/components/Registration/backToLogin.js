import styled from "styled-components";

const BackLog = styled.div`
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: ${({ theme }) => theme.letterSpacing.default};
  fonst-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 200;
  border:none;
  border-bottom: 2px solid #ffffffb5;
  padding: 20px 0 5px 0 ;
  cursor:pointer;
`;

export default BackLog;
