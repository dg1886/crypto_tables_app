import { useContext } from "react";
import { useTheme } from "styled-components";

import { DARK, LIGHT } from "../../../constants/themeConstants";
import { ThemeContext } from "../../../services/themeContext";
import DarkThemeIco from "../../CommonUI/Icons/DarkTheme";
import LighthemeIco from "../../CommonUI/Icons/LightTheme";
import { Option, Switcher, Wrapper } from "./styled";

const SwitchButton = () => {
  const { colors } = useTheme();
  const { setTheme, themeName } = useContext(ThemeContext);

  const handleSetTheme = (theme) => {
    setTheme(theme);
  };

  const isDarkTheme = themeName === DARK;

  return (
    <Wrapper>
      <Option onClick={() => handleSetTheme(DARK)}>
        <DarkThemeIco fill={isDarkTheme ? colors.sideBarIconsActive : colors.sideBarIconsNoActive} />
      </Option>
      <Option onClick={() => handleSetTheme(LIGHT)}>
        <LighthemeIco fill={!isDarkTheme ? colors.sideBarIconsActive : colors.sideBarIconsNoActive} />
      </Option>
      <Switcher chosenTheme={themeName} />
    </Wrapper>
  );
};

export default SwitchButton;
