import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;  
  justify-content: space-between; 
  align-items: center;  
  width: 18rem;
  height: 100%; 
  box-sizing: border-box;
  border: none;
  padding: 0 0 1rem 1rem;
  background-color: transparent;
  @media (max-width: 450px) {     
   width: 7rem;
  }
`;

export const LogoTabsContainer = styled.div`
width: 100%;
`;
