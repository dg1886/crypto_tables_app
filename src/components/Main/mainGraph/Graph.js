import styled from "styled-components";

const Graph = styled.div`
display: flex;
justify-content:center;
align-items: center;
background-color: ${({ theme }) => theme.colors.grey};
width: 65.625rem;
height: 28.125rem;
padding: 0;
box-sizing: border-box;
border-radius:20px;
`;

export default Graph;
