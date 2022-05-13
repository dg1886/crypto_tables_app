import styled from "styled-components";

const Transaction = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
background-color: ${({ theme }) => theme.colors.backgroundItems};
width: 30%;
height: 28.125rem;
padding-top: 1rem;
box-sizing: border-box;
border-radius: 0.625rem;
`;

export default Transaction;

export const Content = styled.div`
display: grid;
grid-template-columns: 0.2fr 1fr 1.8fr;
grid-template-rows: 5rem;
align-items: center;
padding: 0 1rem;
background-color: ${({ backColor, theme }) => theme.colors[backColor]}
`;

export const Tittle = styled.div`
display: flex;
justify-content: flex-start; 
padding: 0 1rem ;
height: 3rem;
`;

export const Border = styled.div`
border-bottom: 1px solid ${({ theme }) => theme.colors.userMenuBackground};
width: 100%;
`;
