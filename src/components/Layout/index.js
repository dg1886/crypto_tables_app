import { Route, Routes } from "react-router-dom";

import Dashboard from "../../pages/Dashboard";
import Statistics from "../../pages/Statistics";
import Wallet from "../../pages/Wallet";
import FlexBox from "../CommonUI/FlexBox";
import Header from "../Header";
import Sidebar from "../Sidebar";

const Layout = () => {
  return (
    <FlexBox width="100vw" height="100vh">

      <Sidebar />

      <FlexBox
        width="100%"
        height="100%"
        flexDirection="column"
        padding="0 1.5rem 2rem 2rem"
        justifyContent="space-between"
      >
        <Header />

        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="statistics" element={<Statistics />} />
        </Routes>
      </FlexBox>

    </FlexBox>
  );
};

export default Layout;
