import { Navigate, Route, Routes } from "react-router-dom";

import MainPage from "../../pages/Main";
import Market from "../../pages/Market/index";
import Messages from "../../pages/Messages";
import Statistics from "../../pages/Statistics";
import Wallet from "../../pages/Wallet";
import Header from "../Header";
import Navigation from "../Navigation";
import { AppWrapper, ContentContainer } from "./style";

const Layout = () => {
  return (
    <AppWrapper>
      <Navigation />
      <ContentContainer>
        <Header />

        <Routes>
          <Route path="*" element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<MainPage />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="market" element={<Market />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="messages" element={<Messages />} />
        </Routes>
      </ContentContainer>
    </AppWrapper>
  );
};

export default Layout;
