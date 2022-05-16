import { useEffect, useState } from "react";

import BtcUsdPeriodOHLC, { ValidPeriods } from "../../api/coinapi";
import FlexBox from "../CommonUI/FlexBox";
import { prepareDateToGraphs } from "../Helpers/prepareDatatoGraphs";
import { prepareLineChartDataHelper } from "../Helpers/prepareLineChartData";
import SmallLineChart from "./lineChart";
import MainGraph from "./mainGraph";
import MarketingBar from "./marketingBar";
import TransactionBar from "./transactionBar";

const MainContent = () => {
  const [data, setData] = useState([]);
  const [lineChartData, setLineChartData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    BtcUsdPeriodOHLC(ValidPeriods.DAY).then((res) => {
      const prepareData = prepareDateToGraphs(res);
      setData(prepareData);
      setError();
    }, (e) => { setError(e); });
    BtcUsdPeriodOHLC(ValidPeriods.MONTH).then((res) => {
      const prepareLineChartData = prepareLineChartDataHelper(res);
      setLineChartData(prepareLineChartData);
      setError();
    }, (e) => { setError(e); });
  }, []);

  return (
    <FlexBox width="100%" flexDirection="column" height="calc(100% - 6rem)" padding="0 1rem ">
      <FlexBox width="100%" justifyContent="space-between">
        <SmallLineChart data={lineChartData} error={error} />
        <SmallLineChart data={lineChartData} error={error} />
        <SmallLineChart data={lineChartData} error={error} />
        <SmallLineChart data={lineChartData} error={error} />
      </FlexBox>

      <FlexBox justifyContent="space-between" width="100%" padding="1rem 0">
        <MainGraph data={data} setData={setData} error={error} />
        <TransactionBar data={data} error={error} />
      </FlexBox>

      <MarketingBar error={error} />
    </FlexBox>
  );
};

export default MainContent;
