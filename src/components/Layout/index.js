import { Route, Routes } from "react-router-dom";

import Market from "../../pages/Market";
import Messages from "../../pages/Messages";
import Statistics from "../../pages/Statistics";
import Wallet from "../../pages/Wallet";
import FlexBox from "../CommonUI/FlexBox";
import Header from "../Header";
import MainContent from "../Main";
import Navigation from "../Navigation";
import { AppWrapper, GlobalBackground } from "./styled";

const Layout = () => {
  return (
    <GlobalBackground>
      <AppWrapper>
        <Navigation />
        <FlexBox
          width="100%"
          height="100%"
          flexDirection="column"
          padding="0 1.5rem 0.5rem 2rem"
          justifyContent="space-between"
        >
          <Header />

          <Routes>
            <Route path="dashboard" element={<MainContent />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="market" element={<Market />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="messages" element={<Messages />} />
          </Routes>
        </FlexBox>
      </AppWrapper>
    </GlobalBackground>
  );
};

export default Layout;
