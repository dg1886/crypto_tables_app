import styled from "styled-components";

import Typography from "../../Typography";

export const LineChartWrapper = styled.div`
  width: 350px;
  height: 150px;
  padding-top: 8px;
  margin-right: 10px;
  box-sizing: border-box;
  scroll-behavior: auto;
  border-radius: 15px;
  position: relative;
  background-color: ${({ color }) => color};

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
  top: 8px;
  left: 10px;
`;

export const PercentInfoContainer = styled.div`
  position: absolute;
  top: 8px;
  left: 260px;
`;

export const ChartText = styled(Typography)`
  color: ${({ color }) => color};
  position: absolute;
  top: 3px;
  left: -70px;
  margin: 0 15px;
`;
