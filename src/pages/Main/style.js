import styled from "styled-components";

import FlexBox from "../../components/CommonUI/FlexBox";

export const WrapperBarGraph = styled.div`
display: flex;
justify-content: space-between;
background-color: transparent;
width: 100%;
padding: 1rem 0;
box-sizing: border-box;
@media (max-width: 450px) {
    flex-direction: column;
  }
`;

export const WrapperLineChart = styled(FlexBox)`
flex-wrap: wrap;
`;

export const ContentWrapper = styled(FlexBox)`
padding: 0 1rem;
max-width: 150rem;
`;
