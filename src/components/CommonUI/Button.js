import styled from "styled-components";

const Button = styled.button`
  position: relative;
  color:${({ theme }) => theme.colors.white};
  background-color: transparent;
  width: ${({ width }) => width || "15.625rem"};
  height: ${({ height }) => height || "3.125rem"};
  margin: ${({ margin }) => margin || "0.938rem 0"};
  padding: ${({ padding }) => padding || 0};
  border: none;
  font-size:  ${({ theme }) => theme.fontSize.normal};
  overlow: hidden; 
  z-index: 1;  
   
  ::before {
    display: block;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.pink};
    width: 100%;
    height: 100%;
    content: "";
    z-index: -1;  
    top:0;  
    border-radius: 0.313rem;
  } 

  :hover {   
    ::before {      
        background-color: ${({ theme }) => theme.colors.red};
      }
  }

  :active {
    ::before {
        transform: scale(0.97);   
      } 
  }
`;

export default Button;
