import { useState } from "react";

import DashboardIcon from "../commonUI/Icons/DashboardIcon";
import StatisticsIcon from "../commonUI/Icons/StatisticsIcon";
import WalletIcon from "../commonUI/Icons/WalletIcon";
import SidebarTab from "../commonUI/SidebarTab";
import LogoutButton from "../LogoutButton";
import SwitchButton from "../SwitchButton";
import { Wrapper } from "./styled";

const Sidebar = () => {
  const [checkedTab, setCheckedTab] = useState(1);

  return (
    <Wrapper>
      <div>
        <SidebarTab
          text="Dashboard"
          margin="0 0 0 11px"
          onClick={() => setCheckedTab(1)}
          checked={checkedTab === 1}
        >
          <DashboardIcon checked={checkedTab === 1} />
        </SidebarTab>

        <SidebarTab
          text="Market"
          margin="0 0 0 17px"
          onClick={() => setCheckedTab(2)}
          checked={checkedTab === 2}
        >
          <WalletIcon checked={checkedTab === 2} />
        </SidebarTab>

        <SidebarTab
          text="Statistics"
          margin="0 0 0 15px"
          onClick={() => setCheckedTab(3)}
          checked={checkedTab === 3}
        >
          <StatisticsIcon checked={checkedTab === 3} />
        </SidebarTab>
      </div>

      <SwitchButton margin="80px 0 0 7px" />
      <LogoutButton />
    </Wrapper>
  );
};

export default Sidebar;
