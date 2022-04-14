import FlexBox from "../components/CommonUI/FlexBox";
import Text from "../components/CommonUI/Text";
import MainGraph from "../components/Main/mainGraph";
import MarketingBar from "../components/Main/marketingBar";
import GraphsSmall from "../components/Main/smallGraphs/SmallGraphs";
import TransactionBar from "../components/Main/transactionBar";

const MainPage = () => {
  return (
    <FlexBox width="100%" height="100vh">

      <FlexBox width="15%" height="100vh" backColor="grey">
        <Text>SideBar</Text>
      </FlexBox>

      <FlexBox width="85%" height="100vh" flexDirection="column">

        <FlexBox width="100%" height="10%" backColor="red">
          <Text>Header ................................................................</Text>
        </FlexBox>

        <FlexBox width="100%" height="90%" flexDirection="column" justifyContent="flex-start" padding="10px 0 ">

          <FlexBox>
            <GraphsSmall />
            <GraphsSmall />
            <GraphsSmall />
            <GraphsSmall />
          </FlexBox>

          <FlexBox justifyContent="space-between" width="100%" padding="20px 55px">
            <MainGraph />
            <TransactionBar />
          </FlexBox>

          <MarketingBar />
        </FlexBox>

      </FlexBox>

    </FlexBox>
  );
};

export default MainPage;
