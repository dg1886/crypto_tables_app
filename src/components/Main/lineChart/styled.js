import styled from "styled-components";

import Typography from "../../Typography";

export const LineChartWrapper = styled.div`
  width: 320px;
  height: 130px;
  padding-top: 8px;
  box-sizing: border-box;
  scroll-behavior: auto;
  border-radius: 15px;
  position: relative;
  background-color: ${({ color }) => color};
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
`;
