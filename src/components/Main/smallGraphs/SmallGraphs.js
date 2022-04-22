import styled from "styled-components";

const GraphsSmall = styled.div` 
display: flex;
justify-content:center;
align-items: center;
background-color: ${({ theme }) => theme.colors.grpahCandleBlue};
width: 24%;
height: 9.375rem;
margin: 0;
padding: 0;
box-sizing: border-box;
border-radius: 0.625rem;
`;

export default GraphsSmall;
