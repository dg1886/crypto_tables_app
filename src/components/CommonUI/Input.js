import styled from "styled-components";

import { baseTheme } from "../../styles/theme";

const Input = styled.input`
  width: ${({ width }) => width || baseTheme.inputSize.width};
  height: ${({ height }) => height || baseTheme.inputSize.height};
  background-color:${baseTheme.colors.grey};
  color:${baseTheme.colors.white};
  padding: 0 10px;
  margin: 10px 0;
  border: none;
  border-radius:10px;
`;

export default Input;
