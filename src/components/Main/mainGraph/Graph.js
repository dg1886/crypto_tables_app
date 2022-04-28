import styled from "styled-components";

import cursor from "../../../assets/images/cursor.svg";

const Container = styled.div`
display: flex;
justify-content: flex-end;
align-items: flex-start;
background-color: transparent;
width: 70%;
height: 28.125rem;
margin-right: 1.5rem;
box-sizing: border-box;
border-radius: 1.25rem;
position: relative;
`;

export default Container;

export const Graph = styled.div`
width: 100%;
height: 90%;
position: absolute;
bottom: 0;
padding-bottom: 0.5rem;
cursor:  url(${cursor}) 15 15, move;
z-index: 2;
`;

export const BarGraph = styled.div`
width: 100%;
height: 90%;
position: absolute;
bottom: 0rem;
z-index: 1;
`;
