import styled from "styled-components";

const Transaction = styled.div`
display: block;
background-color: ${({ theme }) => theme.colors.backgroundItems};
width: 30%;
height: 28.125rem;
padding-top: 1rem;
box-sizing: border-box;
overflow: hidden;
border-radius: 0.625rem;
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export default Transaction;

export const Content = styled.div`
display: grid;
width: 100%;
grid-template-columns: 0.2fr 1fr 1.8fr;
grid-template-rows: 5rem;
align-items: center;
padding: 0 1rem;
box-sizing: border-box;
`;

export const Tittle = styled.div`
padding: 0 1rem ;
height: 2rem;
width: 100%;
box-sizing: border-box;
border-bottom: 1px solid ${({ theme }) => theme.colors.userMenuBackground};
`;

export const GridTableBody = styled.div`
:nth-child(even){
    background-color: ${({ theme }) => theme.colors.background};
  };
:nth-child(odd){
    background-color: ${({ theme }) => theme.colors.backgroundItems};
    border-bottom: 1px solid ${({ theme }) => theme.colors.userMenuBackground};
  }`;
