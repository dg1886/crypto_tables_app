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
