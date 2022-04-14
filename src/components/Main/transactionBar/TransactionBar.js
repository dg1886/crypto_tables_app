import styled from "styled-components";

const Transaction = styled.div`
display: flex;
justify-content:center;
align-items: center;
background-color: ${({ theme }) => theme.colors.grey};
width: 28.75rem;
height: 28.125rem;
padding: 0;
box-sizing: border-box;
border-radius: 0.625rem;
`;

export default Transaction;
