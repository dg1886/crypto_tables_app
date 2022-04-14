import styled from "styled-components";

const GraphsSmall = styled.div`
display: flex;
justify-content:center;
align-items: center;
background-color: ${({ theme }) => theme.colors.blue};
width: 21.875rem;
height: 9.375rem;
margin: 0.625rem 1.25rem 0;
padding: 0;
box-sizing: border-box;
border-radius: 0.625rem;
`;

export default GraphsSmall;
