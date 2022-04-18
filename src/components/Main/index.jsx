import FlexBox from "../CommonUI/FlexBox";
import MainGraph from "./mainGraph";
import MarketingBar from "./marketingBar";
import GraphsSmall from "./smallGraphs/SmallGraphs";
import TransactionBar from "./transactionBar";

const MainContent = () => {
  return (
    <FlexBox width="100%" flexDirection="column">

      <FlexBox width="100%" justifyContent="space-between">
        <GraphsSmall />
        <GraphsSmall />
        <GraphsSmall />
        <GraphsSmall />
      </FlexBox>

      <FlexBox justifyContent="space-between" width="100%" padding="1.5rem 0">
        <MainGraph />
        <TransactionBar />
      </FlexBox>

      <MarketingBar />
    </FlexBox>
  );
};

export default MainContent;
