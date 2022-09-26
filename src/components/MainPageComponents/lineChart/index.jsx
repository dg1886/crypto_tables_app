import React, { useContext, useEffect, useState } from "react";
import { useTheme } from "styled-components";

import { ErrorContext } from "../../../services/errorContext";
import { InfoForGraphContext } from "../../../services/infoForGraphContext";
import { KeysContext } from "../../../services/keyContext";
import LineChartArrows from "../../CommonUI/Icons/LineChartArrows";
import Typography from "../../CommonUI/Typography";
import { prepareDateToGraphs } from "../../Helpers/prepareDatatoGraphs";
import LineChartHandler from "./LineChartHandler";
import {
  ChartText, CurrencyName, InfoContainer, LineChartWrapper, PercentInfoContainer,
} from "./styled";

const lineCharts = ["firstChart", "secondChart", "thirdChart", "fourthChart"];

const SmallLineChart = () => {
  const [data, setData] = useState([]);
  const { lineChartColors } = useTheme();
  const { createNatification } = useContext(ErrorContext);
  const { lineChartApiKey } = useContext(KeysContext);
  const { lineChartGraph } = useContext(InfoForGraphContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const prepareDataLineChart = prepareDateToGraphs(lineChartGraph);
        setData(prepareDataLineChart);
      } catch (error) {
        createNatification(error.message);
      }
    };
    fetchData();
  }, [lineChartApiKey, createNatification, lineChartGraph]);

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

  if (!data.length) {
    return (
      lineCharts.map((item) => (
        <LineChartWrapper color={lineChartColors[1]} key={item}>
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
      <LineChartWrapper color={lineChartColors[1]} key={item}>
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
        <LineChartHandler data={data} color={lineChartColors[profitPercent >= penultPercent ? 0 : 2]} />
      </LineChartWrapper>
    );
  });
};

export default SmallLineChart;
