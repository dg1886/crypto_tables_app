import styled from "styled-components";

import FlexBox from "../../CommonUI/FlexBox";
import Typography from "../../CommonUI/Typography";

export const LineChartWrapper = styled.div`
  width: 24%;
  height: 10rem;
  padding-top: 0.5rem;
  margin-right: 0.5rem;
  box-sizing: border-box;
  scroll-behavior: auto;
  border-radius: 1rem;
  position: relative;
  background-color: ${({ color }) => color};
  overflow: hidden;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 450px) {
    width: 49%;
    height: 15rem;
    margin: 0.5rem 0;
  }
`;

export const InfoContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: fit-content;
  top: 0.5rem;
  left: 0.55rem;
`;

export const PercentInfoContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
`;

export const ChartText = styled(Typography)`
  color: ${({ color }) => color};
  position: absolute;
  top: 0.5rem;
  left: -4rem;
  margin: 0 1rem;
`;

export const CurrencyName = styled(FlexBox)`
background-color: ${({ theme }) => theme.colors.inherit};`;
