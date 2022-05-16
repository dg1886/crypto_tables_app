import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  { name: TAB_NAMES.DASHBOARD, pathname: "/dashboard", icon: (color) => <DashboardIcon fill={color} /> },
  { name: TAB_NAMES.WALLET, pathname: "/wallet", icon: (color) => <WalletIcon fill={color} /> },
  { name: TAB_NAMES.MARKET, pathname: "/market", icon: (color) => <MarketIcon fill={color} /> },
  { name: TAB_NAMES.STATISTICS, pathname: "/statistics", icon: (color) => <StatisticsIcon fill={color} /> },
  { name: TAB_NAMES.MESSAGES, pathname: "/messages", icon: (color) => <MessagesIcon fill={color} /> },
];

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const { colors } = useTheme();

  useEffect(() => {
    navigate(activeTab);
  }, [activeTab]);

  useEffect(() => {
    if (location.pathname === "/") setActiveTab("/dashboard");
    else setActiveTab(location.pathname);
  }, []);

  return navigationConfig.map((item) => {
    const isActive = location.pathname === item.pathname;
    const color = isActive ? colors.sideBarIconsActive : colors.sideBarIconsNoActive;
    return (
      <NavigationItem
        name={item.name}
        onClick={() => setActiveTab(item.pathname)}
        isActive={isActive}
        icon={item.icon(color)}
        key={item.pathname}
      />
    );
  });
};

export default Navigation;
