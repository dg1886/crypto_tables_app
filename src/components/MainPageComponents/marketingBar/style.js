import styled from "styled-components";

const Marketing = styled.div`
background-color: ${({ theme }) => theme.colors.backgroundItems};
width: 100%;
height: 14.375rem;
padding: 1rem 0 0.4rem 0;
box-sizing: border-box;
border-radius: 0.625rem;
overflow: hidden;
border-bottom: 1px solid ${({ theme }) => theme.colors.userMenuBackground};
`;

export default Marketing;

export const Tittle = styled.div`
padding: 0 1rem ;
height: 2rem;
width: 100%;
box-sizing: border-box;
border-bottom: 1px solid ${({ theme }) => theme.colors.userMenuBackground};
`;

export const Head = styled.div`
display: grid;
grid-template-columns: 0.9fr 0.8fr 0.8fr 0.8fr 1fr 1fr 1.2fr;
align-items: center;
padding: 0 1rem ;
background-color: ${({ theme }) => theme.colors.background};
height: 2.5rem;
`;

export const Content = styled.div` 
display: grid;
grid-template-columns: 0.9fr 0.8fr 0.8fr 0.8fr 1fr 1fr 1.2fr;
grid-template-rows: 3rem;
align-items: center;
padding: 0 1rem;
`;

export const GridTableBody = styled.div`
:nth-child(even){
    background-color: ${({ theme }) => theme.colors.background};
  };
:nth-child(odd){
    background-color: ${({ theme }) => theme.colors.backgroundItems};
    border-bottom: 1px solid ${({ theme }) => theme.colors.userMenuBackground};
  }`;
