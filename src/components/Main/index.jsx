import { useEffect, useState } from "react";

import BtcUsdPeriodOHLC, { ValidPeriods } from "../../api/coinapi";
import FlexBox from "../CommonUI/FlexBox";
import { prepareDateToGraphs } from "../Helpers/helperData";
import { prepareLineChartDataHelper } from "../Helpers/prepareLineChartData";
import SmallLineChart from "./lineChart";
import MainGraph from "./mainGraph";
import MarketingBar from "./marketingBar";
import TransactionBar from "./transactionBar";

const MainContent = () => {
  const [data, setData] = useState([]);
  const [lineChartData, setLineChartData] = useState([]);

  useEffect(() => {
    BtcUsdPeriodOHLC(ValidPeriods.DAY).then((res) => {
      const prepareData = prepareDateToGraphs(res);
      setData(prepareData);
    });
    (async () => {
      const res = await BtcUsdPeriodOHLC(ValidPeriods.MONTH);
      const prepareLineChartData = prepareLineChartDataHelper(res);
      setLineChartData(prepareLineChartData);
    })();
  }, []);

  return (
    <FlexBox width="100%" flexDirection="column" height="calc(100% - 6rem)" padding="0 1rem ">
      <FlexBox width="100%" justifyContent="space-between">
        <SmallLineChart data={lineChartData} />
        <SmallLineChart data={lineChartData} />
        <SmallLineChart data={lineChartData} />
        <SmallLineChart data={lineChartData} />
      </FlexBox>

      <FlexBox justifyContent="space-between" width="100%" padding="1rem 0">
        <MainGraph data={data} setData={setData} />
        <TransactionBar />
      </FlexBox>

      <MarketingBar />
    </FlexBox>
  );
};

export default MainContent;
