import { useState } from "react";

import FlexBox from "../CommonUI/FlexBox";
import DashboardIcon from "../CommonUI/Icons/DashboardIcon";
import Logo from "../CommonUI/Icons/Logo";
import StatisticsIcon from "../CommonUI/Icons/StatisticsIcon";
import WalletIcon from "../CommonUI/Icons/WalletIcon";
import Tittle from "../CommonUI/Tittle";
import LogoutButton from "./LogoutButton";
import SidebarTab from "./SidebarTab";
import SwitchButton from "./SwitchButton";

const Sidebar = () => {
  const [checkedTab, setCheckedTab] = useState("dashboard");

  return (
    <FlexBox width="18.75rem" justifyContent="space-between" padding="0 0 1rem 1rem" flexDirection="column" height="100%">
      <div>
        <FlexBox width="100%" height="8rem" justifyContent="space-between">
          <Logo />
          <Tittle padding="0 0 0 1rem">Crypto App</Tittle>
        </FlexBox>

        <SidebarTab
          text="Dashboard"
          margin="0 0 0 1rem"
          onClick={() => setCheckedTab("dashboard")}
          checked={checkedTab === "dashboard"}
        >
          <DashboardIcon checked={checkedTab === "dashboard"} />
        </SidebarTab>

        <SidebarTab
          text="Market"
          margin="0 0 0 1rem"
          onClick={() => setCheckedTab("market")}
          checked={checkedTab === "market"}
        >
          <WalletIcon checked={checkedTab === "market"} />
        </SidebarTab>

        <SidebarTab
          text="Statistics"
          margin="0 0 0 1rem"
          onClick={() => setCheckedTab("statistics")}
          checked={checkedTab === "statistics"}
        >
          <StatisticsIcon checked={checkedTab === "statistics"} />
        </SidebarTab>
      </div>

      <FlexBox width="100%" flexDirection="column" alignItems="flex-start" padding="1rem">
        <SwitchButton margin="5rem 0 0 0.4rem" />
        <LogoutButton />
      </FlexBox>
    </FlexBox>
  );
};

export default Sidebar;
