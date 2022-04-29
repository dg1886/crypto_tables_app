import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";

import { TAB_NAMES } from "../../constants/names";
import DashboardIcon from "../CommonUI/Icons/DashboardIcon";
import MarketIcon from "../CommonUI/Icons/MarketIcon";
import MessagesIcon from "../CommonUI/Icons/MessagesIcon";
import StatisticsIcon from "../CommonUI/Icons/StatisticsIcon";
import WalletIcon from "../CommonUI/Icons/WalletIcon";
import Typography from "../Typography";
import { NavigationItemWrap } from "./styled";

const NavigationItem = ({
  isActive, onClick, icon, name,
}) => {
  return (
    <NavigationItemWrap isActive={isActive} onClick={onClick}>
      {icon}
      <Typography
        variant={isActive ? "sidebar_active_text" : "sidebar_inactive_text"}
        isActive={isActive}
        padding="0 0 0 1.2rem"
      >
        {name}
      </Typography>
    </NavigationItemWrap>
  );
};

const navigationConfig = [
  { name: TAB_NAMES.DASHBOARD, icon: (color) => <DashboardIcon fill={color} />, key: 1 },
  { name: TAB_NAMES.WALLET, icon: (color) => <WalletIcon fill={color} />, key: 2 },
  { name: TAB_NAMES.MARKET, icon: (color) => <MarketIcon fill={color} />, key: 3 },
  { name: TAB_NAMES.STATISTICS, icon: (color) => <StatisticsIcon fill={color} />, key: 4 },
  { name: TAB_NAMES.MESSAGES, icon: (color) => <MessagesIcon fill={color} />, key: 5 },
];

const Navigation = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(TAB_NAMES.DASHBOARD);
  const { colors } = useTheme();

  useEffect(() => {
    navigate(activeTab);
  }, [activeTab]);

  return navigationConfig.map((item) => {
    const isActive = activeTab === item.name;
    const color = isActive ? colors.sideBarIconsActive : colors.sideBarIconsNoActive;
    return (
      <NavigationItem
        name={item.name}
        onClick={() => setActiveTab(item.name)}
        isActive={isActive}
        icon={item.icon(color)}
        key={item.key}
      />
    );
  });
};

export default Navigation;
