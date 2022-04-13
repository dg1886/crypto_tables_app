import { useTheme } from "styled-components";

import FlexBox from "../components/commonUI/FlexBox";
import Text from "../components/commonUI/Text";
import MainGraph from "../components/Main/mainGraph";
import MarketingBar from "../components/Main/marketingBar";
import SmallGraphs from "../components/Main/smallGraphs";
import TransactionBar from "../components/Main/transactionBar";

const MainPage = () => {
  const { colors } = useTheme();
  return (
    <FlexBox width="100%" height="100vh">

      <FlexBox width="15%" height="100vh" backColor={colors.grey}>
        <Text>SideBar</Text>
      </FlexBox>

      <FlexBox width="85%" height="100vh" flexDirection="column">

        <FlexBox width="100%" height="10%" backColor={colors.red}>
          <Text>Header ................................................................</Text>
        </FlexBox>

        <FlexBox width="100%" height="90%" flexDirection="column" justifyContent="flex-start" padding="10px 0 ">

          <FlexBox>
            <SmallGraphs />
            <SmallGraphs />
            <SmallGraphs />
            <SmallGraphs />
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
