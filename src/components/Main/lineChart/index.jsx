import { useEffect, useRef } from "react";
import { useTheme } from "styled-components";

import FlexBox from "../../CommonUI/FlexBox";
import LineChartArrows from "../../CommonUI/Icons/LineChartArrows";
import Typography from "../../Typography";
import LineChart from "./LineChart";
import {
  ChartText, InfoContainer, LineChartWrapper, PercentInfoContainer,
} from "./styled";

const SmallLineChart = ({ data, error }) => {
  const lineChart = useRef(null);
  const { colors, lineChartColors } = useTheme();

  useEffect(() => {
    if (lineChart.current?.children[0]) {
      lineChart.current.removeChild(lineChart.current.children[0]);
    }
    if (lineChart.current) {
      lineChart.current.appendChild(LineChart(data, {
        x: (d) => d.date,
        y: (d) => d.close,

        color: lineChartColors[profitPercent >= penultPercent ? 0 : 2],
      }));
    }
  }, [data]);

  const firstPrice = data[0]?.close;
  const lastPrice = data[data.length - 1]?.close;
  const penultPrice = data[data.length - 2]?.close;

  const profitPercent = (
    ((firstPrice * 100) / lastPrice - 100).toFixed(2)
  );
  const penultPercent = (
    ((firstPrice * 100) / penultPrice - 100).toFixed(2)
  );
  const profitPercentHelper = profitPercent >= penultPercent ? lineChartColors[0] : lineChartColors[2];

  return (
    <LineChartWrapper color={lineChartColors[1]}>
      <InfoContainer>
        <FlexBox backColor={colors.inherit}>
          <Typography variant="normal_16px">BTC</Typography>
          <LineChartArrows />
          <Typography variant="normal_16px">USD</Typography>
        </FlexBox>
        <div>
          <Typography variant="bold_16px" margin="5px 0 0 0">${lastPrice}</Typography>
        </div>
      </InfoContainer>
      <PercentInfoContainer>
        <ChartText variant="normal_14px" color={profitPercentHelper}>+{error ? "" : profitPercent}%</ChartText>
      </PercentInfoContainer>
      <div ref={lineChart} />
    </LineChartWrapper>
  );
};

export default SmallLineChart;
