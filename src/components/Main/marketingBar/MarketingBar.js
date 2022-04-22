import styled from "styled-components";

const Marketing = styled.div`
display: flex;
justify-content:center; 
align-items: center;
background-color: ${({ theme }) => theme.colors.backgroundItems};
width: 100%;
height: 14.375rem;
padding: 0;
box-sizing: border-box;
border-radius: 0.625rem;
`;

export default Marketing;
