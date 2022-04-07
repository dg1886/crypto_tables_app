import styled from "styled-components";

import { baseTheme } from "../../styles/theme";

const Button = styled.button`
  background-color: ${baseTheme.colors.pink};
  color:${baseTheme.colors.white};
  width: ${({ width }) => width || "250px"};
  height: ${({ height }) => height || "50px"};
  margin: ${({ margin }) => margin || "15px 0"};
  padding: ${({ padding }) => padding || 0};
  box-sizing:  "border-box";
  border:none;
  border-radius: 5px;
`;

export default Button;
