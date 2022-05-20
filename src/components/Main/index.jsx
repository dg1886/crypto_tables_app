import {
  useContext, useEffect, useState,
} from "react";

import BtcUsdPeriodOHLC, { ValidPeriods } from "../../api/coinapi";
import { ErrorContext } from "../../services/errorContext";
import FlexBox from "../CommonUI/FlexBox";
import { prepareDateToGraphs } from "../Helpers/prepareDatatoGraphs";
import SmallLineChart from "./lineChart";
import MainGraph from "./mainGraph";
import MarketingBar from "./marketingBar";
import TransactionBar from "./transactionBar";

const MainContent = () => {
  const [data, setData] = useState([]);
  const [lineChartData, setLineChartData] = useState([]);

  const { createNatification } = useContext(ErrorContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [dayData, monthData] = await Promise.all([
          BtcUsdPeriodOHLC(ValidPeriods.DAY),
          BtcUsdPeriodOHLC(ValidPeriods.MONTH),
        ]);

        const prepareDataMainGraph = prepareDateToGraphs(dayData);
        const prepareDataLineChart = prepareDateToGraphs(monthData);

        setData(prepareDataMainGraph);
        setLineChartData(prepareDataLineChart);
      } catch (error) {
        createNatification(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <FlexBox
      width="100%"
      flexDirection="column"
      height="calc(100% - 6rem)"
      padding="0 1rem "
      maxWidth="103.1rem"
      minWidth="54.7rem"
    >

      <FlexBox width="100%" justifyContent="space-between">
        <SmallLineChart data={lineChartData} />
      </FlexBox>

      <FlexBox justifyContent="space-between" width="100%" padding="1rem 0">
        <MainGraph data={data} setData={setData} />
        <TransactionBar data={data} />
      </FlexBox>

      <MarketingBar />
    </FlexBox>
  );
};

export default MainContent;
