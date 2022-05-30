import FlexBox from "../CommonUI/FlexBox";
import SmallLineChart from "./lineChart";
import MainGraph from "./mainGraph";
import { WrapperBarGraph } from "./mainGraph/style";
import MarketingBar from "./marketingBar";
import TransactionBar from "./transactionBar";

const MainContent = () => {
  return (
    <FlexBox
      width="100%"
      flexDirection="column"
      justifyContent="flex-start"
      height="100%"
      padding="0 1rem "
      maxWidth="150rem"
    >

      <FlexBox width="100%" justifyContent="space-between">
        <SmallLineChart />
      </FlexBox>

      <WrapperBarGraph>
        <MainGraph />
        <TransactionBar />
      </WrapperBarGraph>

      <MarketingBar />
    </FlexBox>
  );
};

export default MainContent;
