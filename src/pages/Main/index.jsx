import SmallLineChart from "../../components/MainPageComponents/lineChart";
import MainGraph from "../../components/MainPageComponents/mainGraph";
import MarketingBar from "../../components/MainPageComponents/marketingBar";
import TransactionBar from "../../components/MainPageComponents/transactionBar";
import { ContentWrapper, WrapperBarGraph, WrapperLineChart } from "./style";

const MainPage = () => {
  return (

    <ContentWrapper width="100%" flexDirection="column" justifyContent="flex-start" height="100%">

      <WrapperLineChart width="100%" justifyContent="space-between">
        <SmallLineChart />
      </WrapperLineChart>

      <WrapperBarGraph>
        <MainGraph />
        <TransactionBar />
      </WrapperBarGraph>

      <MarketingBar />

    </ContentWrapper>

  );
};

export default MainPage;
