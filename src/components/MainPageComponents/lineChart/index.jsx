import React, { useContext, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useTheme } from "styled-components";

import { ErrorContext } from "../../../services/errorContext";
import { defaultApiKeyState } from "../../../state/atoms/apiKeysState";
import { lineChartState } from "../../../state/atoms/infoGraphState";
// import { apiKeysSelector } from "../../../state/selectors/apiKeysSelectors";
import LineChartArrows from "../../CommonUI/Icons/LineChartArrows";
import Typography from "../../CommonUI/Typography";
import LineChartHandler from "./LineChartHandler";
import {
  ChartText, CurrencyName, InfoContainer, LineChartWrapper, PercentInfoContainer,
} from "./styled";

const lineCharts = ["firstChart", "secondChart", "thirdChart", "fourthChart"];

const SmallLineChart = () => {
  const { colors } = useTheme();
  const { createNotification } = useContext(ErrorContext);
  const apiKey = useRecoilValue(defaultApiKeyState);
  const [data, setData] = useRecoilState(lineChartState);

  useEffect(() => {
    setData({
      apiKey,
      createNotification,
    });
  }, [apiKey]);

  const firstPrice = data[0]?.close;
  const lastPrice = data[data.length - 1]?.close;
  const penultPrice = data[data.length - 2]?.close;

  const profitPercent = (
    ((firstPrice * 100) / lastPrice - 100).toFixed(2)
  );
  const penultPercent = (
    ((firstPrice * 100) / penultPrice - 100).toFixed(2)
  );
  const profitPercentHelper = profitPercent >= penultPercent ? colors.lineChartColors[0] : colors.lineChartColors[2];

  if (!data.length) {
    return (
      lineCharts.map((item) => (
        <LineChartWrapper color={colors.lineChartColors[1]} key={item}>
          <InfoContainer>
            <CurrencyName>
              <Typography variant="normal_16px">BTC</Typography>
              <LineChartArrows />
              <Typography variant="normal_16px">USD</Typography>
            </CurrencyName>
            <div>
              <Typography variant="bold_16px" margin="5px 0 0 0">No Data</Typography>
            </div>
          </InfoContainer>
        </LineChartWrapper>
      )));
  }

  return lineCharts.map((item) => {
    return (
      <LineChartWrapper color={colors.lineChartColors[1]} key={item}>
        <InfoContainer>
          <CurrencyName>
            <Typography variant="normal_16px">BTC</Typography>
            <LineChartArrows />
            <Typography variant="normal_16px">USD</Typography>
          </CurrencyName>
          <div>
            <Typography variant="bold_16px" margin="5px 0 0 0">${lastPrice}</Typography>
          </div>
        </InfoContainer>
        <PercentInfoContainer>
          <ChartText variant="normal_14px" color={profitPercentHelper}>+{profitPercent}%</ChartText>
        </PercentInfoContainer>
        <LineChartHandler data={data} color={colors.lineChartColors[profitPercent >= penultPercent ? 0 : 2]} />
      </LineChartWrapper>
    );
  });
};

export default SmallLineChart;
