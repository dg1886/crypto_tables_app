import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.pink};
  color:${({ theme }) => theme.colors.white};
  width: ${({ width }) => width || "250px"};
  height: ${({ height }) => height || "50px"};
  margin: ${({ margin }) => margin || "15px 0"};
  padding: ${({ padding }) => padding || 0};
  border:none;
  border-radius: 5px;

  :hover {
    background-color: ${({ theme }) => theme.colors.red};
  
  :active {
    transform:scale(0.97)
  }
  
`;

export default Button;
