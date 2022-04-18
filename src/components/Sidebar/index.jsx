import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { TAB_NAMES } from "../../constants/Names";
import { useLogout } from "../../hooks/useLogout";
import FlexBox from "../CommonUI/FlexBox";
import DashboardIcon from "../CommonUI/Icons/DashboardIcon";
import Logo from "../CommonUI/Icons/Logo";
import StatisticsIcon from "../CommonUI/Icons/StatisticsIcon";
import WalletIcon from "../CommonUI/Icons/WalletIcon";
import { Title } from "../Text/Title";
import LogoutButton from "./LogoutButton";
import SidebarTab from "./SidebarTab";
import SwitchButton from "./SwitchButton";

const Sidebar = () => {
  const [checkedTab, setCheckedTab] = useState(TAB_NAMES.DASHBOARD);
  const navigate = useNavigate();
  const logout = useLogout("/login");

  useEffect(() => {
    navigate(checkedTab);
  }, [checkedTab]);

  return (
    <FlexBox
      width="18.75rem"
      justifyContent="space-between"
      padding="0 0 1rem 1rem"
      flexDirection="column"
      height="100%"
    >
      <div>
        <FlexBox width="100%" height="6rem" justifyContent="space-between" margin="0 0 1rem 0">
          <Logo />
          <Title padding="0 0 0 1rem" userSelect="none">Crypto App</Title>
        </FlexBox>

        <SidebarTab
          text={TAB_NAMES.DASHBOARD}
          margin="0 0 0 1rem"
          onClick={() => setCheckedTab(TAB_NAMES.DASHBOARD)}
          checked={checkedTab === TAB_NAMES.DASHBOARD}
        >
          <DashboardIcon checked={checkedTab === TAB_NAMES.DASHBOARD} />
        </SidebarTab>

        <SidebarTab
          text={TAB_NAMES.WALLET}
          margin="0 0 0 1rem"
          onClick={() => setCheckedTab(TAB_NAMES.WALLET)}
          checked={checkedTab === TAB_NAMES.WALLET}
        >
          <WalletIcon checked={checkedTab === TAB_NAMES.WALLET} />
        </SidebarTab>

        <SidebarTab
          text={TAB_NAMES.STATISTICS}
          margin="0 0 0 1rem"
          onClick={() => setCheckedTab(TAB_NAMES.STATISTICS)}
          checked={checkedTab === TAB_NAMES.STATISTICS}
        >
          <StatisticsIcon checked={checkedTab === TAB_NAMES.STATISTICS} />
        </SidebarTab>
      </div>

      <FlexBox width="100%" flexDirection="column" alignItems="flex-start" padding="1rem">
        <SwitchButton margin="5rem 0 0 0.4rem" />
        <LogoutButton logout={logout} />
      </FlexBox>
    </FlexBox>
  );
};

export default Sidebar;
