import { useContext, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import BtcUsdPeriodOHLC, { ValidPeriods } from "../../api/coinapi";
import { ErrorContext } from "../../services/errorContext";
import { defaultApiKeyState } from "../../state/atoms/apiKeysState";
import FlexBox from "../CommonUI/FlexBox";
import { prepareDateToGraphs } from "../Helpers/prepareDatatoGraphs";
import SmallLineChart from "../MainPageComponents/lineChart";
import MainGraph from "../MainPageComponents/mainGraph";
import MarketingBar from "../MainPageComponents/marketingBar";
import TransactionBar from "../MainPageComponents/transactionBar";

const MainContent = () => {
  const [data, setData] = useState([]);
  const [lineChartData, setLineChartData] = useState([]);

  const { createNotification } = useContext(ErrorContext);
  const apiKey = useRecoilValue(defaultApiKeyState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [dayData, monthData] = await Promise.all([
          BtcUsdPeriodOHLC(ValidPeriods.DAY, apiKey),
          BtcUsdPeriodOHLC(ValidPeriods.MONTH, apiKey),
        ]);

        const prepareDataMainGraph = prepareDateToGraphs(dayData);
        const prepareDataLineChart = prepareDateToGraphs(monthData);

        setData(prepareDataMainGraph);
        setLineChartData(prepareDataLineChart);
      } catch (error) {
        createNotification(error.message);
      }
    };
    fetchData();
  }, [apiKey]);

  return (
    <FlexBox
      width="100%"
      flexDirection="column"
      height="calc(100% - 6rem)"
      padding="0 1rem "
      maxWidth="103.1rem"
      minWidth="70%"
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
