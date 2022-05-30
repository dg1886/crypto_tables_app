import styled from "styled-components";

import Typography from "../../Typography";

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
