import {
  useContext, useEffect, useRef, useState,
} from "react";
import { useRecoilValue } from "recoil";
import { useTheme } from "styled-components";

import { ValidPeriods } from "../../../api/coinapi";
import { ErrorContext } from "../../../services/errorContext";
import { InfoForGraphContext } from "../../../services/infoForGraphContext";
import { defaultApiKeyState } from "../../../state/atoms/apiKeysState";
import FlexBox from "../../CommonUI/FlexBox";
import Typography from "../../CommonUI/Typography";
import { prepareDateToGraphs } from "../../Helpers/prepareDatatoGraphs";
import renderGraph from "../../Helpers/renderGraph";
import JapanCandles from "./d3Candle";
import BarChart from "./d3Chart";
import InfoBlock from "./InfoBlock";
import Periods from "./periodButons";
import Container, { BarGraph, Graph } from "./style";

const MainGraph = () => {
  const [data, setData] = useState([]);
  const [period, setPeriod] = useState(ValidPeriods.DAY);
  const [focusCandle, setFocusCandle] = useState({});
  const { colors } = useTheme();
  const mainGraphRef = useRef(null);
  const secondGraphRef = useRef(null);
  const allVolumeTrade = Math.round(data
    ?.reduce((sum, item) => (sum + item.volume), 0))
    .toFixed(1);

  const { createNotification } = useContext(ErrorContext);
  const { mainGraph } = useContext(InfoForGraphContext);

  const apiKey = useRecoilValue(defaultApiKeyState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const prepareDataMainGraph = await prepareDateToGraphs(mainGraph);
        setData(prepareDataMainGraph);
      } catch (error) {
        createNotification(error.message);
      }
    };
    fetchData();
  }, [apiKey, mainGraph, createNotification]);

  useEffect(() => {
    setFocusCandle(data[0]);

    renderGraph({
      ref: mainGraphRef,
      graph: JapanCandles,
      data,
      options: {
        period,
        setFocusCandle,
        colors: colors.graphColors,
      },
    });

    renderGraph({
      ref: secondGraphRef,
      graph: BarChart,
      data,
      options: { colors: colors.graphColors },
    });
  }, [data, colors.graphColors, period]);

  if (!data.length) {
    return (
      <Container>
        <InfoBlock>
          <Typography variant="bold_24px" margin="0 0 0 0.625rem">BTC/USD - {period}</Typography>
          <br />
          <Typography variant="normal_18px" margin="0 0 0 0.625rem">O {focusCandle?.open}</Typography>
          <Typography variant="normal_18px" margin="0 0 0 0.625rem">H {focusCandle?.high}</Typography>
          <Typography variant="normal_18px" margin="0 0 0 0.625rem">L {focusCandle?.low}</Typography>
          <Typography variant="normal_18px" margin="0 0 0 0.625rem">C {focusCandle?.close}</Typography>
        </InfoBlock>
        <Typography variant="bold_16px" margin="0 auto" padding="12rem 0">No Data</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <FlexBox>
        <Periods setData={setData} setPeriod={setPeriod} />
      </FlexBox>
      <InfoBlock>
        <Typography variant="bold_24px" margin="0 0 0 0.625rem">BTC/USD - {period}</Typography>
        <br />
        <Typography variant="normal_18px" margin="0 0 0 0.625rem">O {focusCandle?.open}</Typography>
        <Typography variant="normal_18px" margin="0 0 0 0.625rem">H {focusCandle?.high}</Typography>
        <Typography variant="normal_18px" margin="0 0 0 0.625rem">L {focusCandle?.low}</Typography>
        <Typography variant="normal_18px" margin="0 0 0 0.625rem">C {focusCandle?.close}</Typography>
        <br />
        <Typography variant="normal_18px" margin="0 0 0 0.625rem">Volume {allVolumeTrade}</Typography>
      </InfoBlock>
      <Graph ref={mainGraphRef} />
      <BarGraph ref={secondGraphRef} />
    </Container>
  );
};

export default MainGraph;
