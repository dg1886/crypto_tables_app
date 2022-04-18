import styled from "styled-components";

const Graph = styled.div`
display: flex;
justify-content:center;
align-items: center;
background-color: ${({ theme }) => theme.colors.backgroundItems};
width: 70%;
height: 28.125rem;
margin-right: 1.5rem;
box-sizing: border-box;
border-radius: 1.25rem;
`;

export default Graph;
