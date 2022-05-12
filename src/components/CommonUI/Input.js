import styled from "styled-components";

const Input = styled.input`
  width: ${({ width, theme }) => width || theme.inputSize.width};
  height: ${({ height, theme }) => height || theme.inputSize.height};
  background-color: ${({ theme }) => theme.colors.backgroundItems};
  color: ${({ theme }) => theme.colors.textColor};
  padding: 0 0.625rem;
  margin: ${({ margin }) => margin || "0.625rem 0.25rem"};
  border: none;
  border-radius: 0.625rem;
`;

export default Input;
