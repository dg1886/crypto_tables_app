import { useState } from "react";
import { useTheme } from "styled-components";

import DashboardIcon from "../CommonUI/Icons/DashboardIcon";
import MarketIcon from "../CommonUI/Icons/MarketIcon";
import MessagesIcon from "../CommonUI/Icons/MessagesIcon";
import StatisticsIcon from "../CommonUI/Icons/StatisticsIcon";
import WalletIcon from "../CommonUI/Icons/WalletIcon";
import { SidebarText } from "../Text/SidebarText";
import { NavigationItemWrap } from "./styled";

const NavigationItem = ({
  isActive, onClick, icon, name,
}) => {
  return (
    <NavigationItemWrap isActive={isActive} onClick={onClick}>
      {icon}
      <SidebarText isActive={isActive} padding="0 0.5rem">
        {name}
      </SidebarText>
    </NavigationItemWrap>
  );
};
const navigationiConfig = [
  { name: "dashboard", icon: (color) => <DashboardIcon fill={color} />, key: 1 },
  { name: "wallet", icon: (color) => <WalletIcon fill={color} />, key: 2 },
  { name: "market", icon: (color) => <MarketIcon fill={color} />, key: 3 },
  { name: "statistic", icon: (color) => <StatisticsIcon fill={color} />, key: 4 },
  { name: "messages", icon: (color) => <MessagesIcon fill={color} />, key: 5 },
];

const Navigation = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { colors } = useTheme();

  return navigationiConfig.map((item) => {
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
