import { useState } from "react";

import DashboardIcon from "../commonUI/Icons/DashboardIcon";
import StatisticsIcon from "../commonUI/Icons/StatisticsIcon";
import WalletIcon from "../commonUI/Icons/WalletIcon";
import SidebarTab from "../commonUI/SidebarTab";
import LogoutButton from "../LogoutButton";
import SwitchButton from "../SwitchButton";
import { SidebarWrapper } from "./styled";

const Sidebar = () => {
  const [checkedTab, setCheckedTab] = useState("dashboard");

  return (
    <SidebarWrapper>
      <div>
        <SidebarTab
          text="Dashboard"
          margin="0 0 0 11px"
          onClick={() => setCheckedTab("dashboard")}
          checked={checkedTab === "dashboard"}
        >
          <DashboardIcon checked={checkedTab === "dashboard"} />
        </SidebarTab>

        <SidebarTab
          text="Market"
          margin="0 0 0 17px"
          onClick={() => setCheckedTab("market")}
          checked={checkedTab === "market"}
        >
          <WalletIcon checked={checkedTab === "market"} />
        </SidebarTab>

        <SidebarTab
          text="Statistics"
          margin="0 0 0 15px"
          onClick={() => setCheckedTab("statistics")}
          checked={checkedTab === "statistics"}
        >
          <StatisticsIcon checked={checkedTab === "statistics"} />
        </SidebarTab>
      </div>

      <SwitchButton margin="80px 0 0 7px" />
      <LogoutButton />
    </SidebarWrapper>
  );
};

export default Sidebar;
