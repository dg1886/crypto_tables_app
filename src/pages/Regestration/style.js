import styled from "styled-components";

import FlexBox from "../../components/CommonUI/FlexBox";

export const ContentWrapper = styled(FlexBox)`
    padding: 2rem 0;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 1.25rem;
`;

export const MainWrapper = styled(FlexBox)`
    background-color: ${({ theme }) => theme.colors.secondary};
`;
