import styled from "styled-components";

const PeriodButton = styled.button`
background-color: ${({ theme, isActive }) => (isActive ? theme.colors.backgroundItems : "transparent")};
color:${({ theme, isActive }) => (isActive ? theme.colors.red : theme.colors.lightGrey)};
width: 4rem; 
height: 2rem;
margin-left: 1.5rem;
box-sizing: border-box;
border-radius: 0.5rem;
border: none;
z-index: 1;
`;

export default PeriodButton;
