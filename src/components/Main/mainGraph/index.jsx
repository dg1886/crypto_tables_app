import { useEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";

import BtcUsdPeriodOHLC, { ValidPeriods } from "../../../api/coinapi";
import FlexBox from "../../CommonUI/FlexBox";
import { prepareDateToGraphs } from "../../Helpers/helperData";
import renderGraph from "../../Helpers/renderGraph";
import Typography from "../../Typography";
import JapanCandles from "./d3Candle";
import BarChart from "./d3Chart";
import Container, { BarGraph, Graph } from "./Graph";
import InfoBlock from "./InfoBlock";
import PeriodButton from "./PeriodButton";

const buttons = [
  { text: "1D", value: ValidPeriods.DAY },
  { text: "1W", value: ValidPeriods.WEEK },
  { text: "1M", value: ValidPeriods.MONTH },
  { text: "1Y", value: ValidPeriods.YEAR },
];

const Periods = ({ setData, setPeriod }) => {
  const [activeButton, setActiveButton] = useState(ValidPeriods.DAY);
  return buttons.map((item) => {
    const isActive = activeButton === item.value;
    const handlePeriod = () => {
      setActiveButton(item.value);
      BtcUsdPeriodOHLC(item.value).then((res) => setData(prepareDateToGraphs(res)));
      setPeriod(item.value);
    };
    return (
      <PeriodButton isActive={isActive} key={item.text} onClick={handlePeriod}>
        {item.text}
      </PeriodButton>
    );
  });
};

const MainGraph = () => {
  const [period, setPeriod] = useState(ValidPeriods.DAY);
  const [data, setData] = useState([]);
  const [focusCandle, setFocusCandle] = useState({});
  const { graphColors } = useTheme();
  const mainGraphRef = useRef(null);
  const secondGraphRef = useRef(null);
  const allVolumeTrade = Math.round(data
    ?.map((item) => item.volume)
    .reduce((sum, current) => (sum + current), 0))
    .toFixed(1);

  useEffect(() => {
    BtcUsdPeriodOHLC(ValidPeriods.DAY).then((res) => {
      const prepareData = prepareDateToGraphs(res);
      setData(prepareData);
      setFocusCandle(prepareData[0]);
    });
  }, []);

  useEffect(() => {
    renderGraph({
      ref: mainGraphRef,
      graph: JapanCandles,
      data,
      options: {
        period,
        setFocusCandle,
        colors: graphColors,
      },
    });

    renderGraph({
      ref: secondGraphRef,
      graph: BarChart,
      data,
      options: { colors: graphColors },
    });
  }, [data, graphColors]);

  return (
    <Container>
      <FlexBox margin="0 5rem 0 0">
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
