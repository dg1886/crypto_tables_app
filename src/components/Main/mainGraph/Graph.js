import styled from "styled-components";

const Graph = styled.div`
display: flex;
justify-content:center;
align-items: center;
background-color: ${({ theme }) => theme.colors.grey};
width: 70rem;
height: 28.125rem;
padding: 0;
box-sizing: border-box;
border-radius: 1.25rem;
`;

export default Graph;
