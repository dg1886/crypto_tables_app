import styled from "styled-components";

export const LogoWrap = styled.div`
  display: flex;
  background-color: transparent;
  justify-content: flex-start; 
  align-items: center;  
  width: 100%;
  height: 6rem; 
  box-sizing: border-box;
  border: none;
  padding: 0;
  @media (max-width: 450px) {     
    span {
      display: none;
    }
  }
`;
