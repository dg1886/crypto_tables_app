import styled from "styled-components";

const Input = styled.input`
  width: ${({ width, theme }) => width || theme.inputSize.width};
  height: ${({ height, theme }) => height || theme.inputSize.height};
  background-color:${({ theme }) => theme.colors.grey};
  color:${({ theme }) => theme.colors.white};
  padding: 0 10px;
  margin: 10px 0;
  border: none;
  border-radius:10px;
`;

export default Input;
