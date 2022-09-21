import { CHART_COLORS, COLORS, GRAPH_COLORS } from "./colors";

const fontFamily = { fontFamily: "Gilroy" };

const fontNormal = {
  ...fontFamily,
  fontWeight: "normal",
  fontStyle: "normal",
  letterSpacing: "1px",
};

const fontBold = {
  ...fontFamily,
  fontWeight: "bold",
  fontStyle: "normal",
  letterSpacing: "1px",
};

export const dark = {
  fontFamily: {
    primary: "Gilroy",
  },
  letterSpacing: {
    default: "1px",
  },
  fontSize: {
    large: "1.5rem",
    normal: "1rem",
    small: "0.875rem",
  },
  iconSize: {
    height: "1.875rem",
    width: "1.875rem",
  },
  inputSize: {
    height: "2.813rem",
    width: "25rem",
  },
  colors: {
    background: COLORS.DARK_THEME.BACKGROUND,
    secondary: COLORS.DARK_THEME.SECONDARY,
    textColor: COLORS.DARK_THEME.TEXT,
    backgroundItems: COLORS.DARK_THEME.BACKGROUND_ITEMS,
    sideBarIconsActive: COLORS.DARK_THEME.ACTIVE,
    sideBarIconsNoActive: COLORS.DARK_THEME.SECONDARY_BACKGROUND,
    sideBarTextActive: COLORS.DARK_THEME.ACTIVE,
    sideBarTextNoActive: COLORS.DARK_THEME.SECONDARY_BACKGROUND,
    red: COLORS.DARK_THEME.SECONDARY_RED,
    lightGrey: COLORS.LIGHT_GREY,
    buttonColor: COLORS.DARK_THEME.PRIMARY_RED,
    hoverButton: COLORS.DARK_THEME.SECONDARY_RED,
    userMenuBackground: COLORS.LIGHT_GREY,
    inherit: COLORS.INHERIT,
    error: COLORS.ERROR,
    graphColors: [GRAPH_COLORS.DARK_THEME.FIRST, GRAPH_COLORS.DARK_THEME.SECOND, GRAPH_COLORS.DARK_THEME.THIRD],
    lineChartColors: [CHART_COLORS.DARK_THEME.FIRST, CHART_COLORS.DARK_THEME.SECOND, CHART_COLORS.DARK_THEME.THIRD],
  },
  boxShadow: {
    primary: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    secondary: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
  },

  bold_24px: {
    ...fontBold,
    fontSize: "1.5rem",
    color: COLORS.DARK_THEME.TEXT,
  },
  bold_16px: {
    ...fontBold,
    fontSize: "1rem",
    color: COLORS.DARK_THEME.TEXT,
    textTransform: "capitalize",
  },
  normal_18px: {
    ...fontBold,
    fontSize: "1.125rem",
    color: COLORS.DARK_THEME.TEXT,
  },
  normal_16px: {
    ...fontNormal,
    fontSize: "1rem",
    color: COLORS.DARK_THEME.TEXT,
  },
  normal_14px: {
    ...fontNormal,
    fontSize: "0.875rem",
    color: COLORS.DARK_THEME.TEXT,
  },
  price_up: {
    ...fontNormal,
    fontSize: "1rem",
    color: GRAPH_COLORS.DARK_THEME.FIRST,
  },
  price_down: {
    ...fontNormal,
    fontSize: "1rem",
    color: GRAPH_COLORS.DARK_THEME.THIRD,
  },
  sidebar_active_text: {
    ...fontBold,
    fontSize: "1rem",
    color: COLORS.DARK_THEME.TEXT,
    textTransform: "capitalize",
    userSelect: "none",
  },
  sidebar_inactive_text: {
    ...fontBold,
    fontSize: "1rem",
    color: COLORS.DARK_THEME.SECONDARY_BACKGROUND,
    textTransform: "capitalize",
    userSelect: "none",
  },
  user_name_tag: {
    ...fontBold,
    fontSize: "1.5rem",
    color: COLORS.DARK_THEME.SECONDARY_BACKGROUND,
    userSelect: "none",
  },
  form_validation: {
    ...fontNormal,
    height: "1.125rem",
    fontSize: "0.875rem",
    color: COLORS.DARK_THEME.SECONDARY_RED,
  },
};

export const light = {
  fontFamily: {
    primary: "Gilroy",
  },
  letterSpacing: {
    default: "1px",
  },
  fontSize: {
    large: "1.5rem",
    normal: "1rem",
    small: "0.875rem",
  },
  iconSize: {
    height: "1.875rem",
    width: "1.875rem",
  },
  inputSize: {
    height: "2.813rem",
    width: "25rem",
  },
  colors: {
    background: COLORS.LIGHT_THEME.BACKGROUND,
    secondary: COLORS.LIGHT_THEME.SECONDARY,
    textColor: COLORS.LIGHT_THEME.TEXT,
    backgroundItems: COLORS.LIGHT_THEME.BACKGROUND_ITEMS,
    sideBarIconsActive: COLORS.LIGHT_THEME.BACKGROUND,
    sideBarIconsNoActive: COLORS.LIGHT_THEME.SECONDARY_BACKGROUND,
    sideBarTextActive: COLORS.LIGHT_THEME.BACKGROUND,
    sideBarTextNoActive: COLORS.LIGHT_THEME.SECONDARY_BACKGROUND,
    buttonColor: COLORS.LIGHT_THEME.BUTTON_BACKGROUND,
    red: COLORS.LIGHT_THEME.LIGHT_RED,
    lightGrey: COLORS.LIGHT_GREY,
    hoverButton: COLORS.LIGHT_THEME.LIGHT_RED,
    userMenuBackground: COLORS.LIGHT_THEME.SECONDARY_BACKGROUND,
    inherit: COLORS.INHERIT,
    error: COLORS.ERROR,
    graphColors: [GRAPH_COLORS.LIGHT_THEME.FIRST, GRAPH_COLORS.LIGHT_THEME.SECOND, GRAPH_COLORS.LIGHT_THEME.THIRD],
    lineChartColors: [CHART_COLORS.LIGHT_THEME.FIRST, CHART_COLORS.LIGHT_THEME.SECOND, CHART_COLORS.LIGHT_THEME.THIRD],
  },
  boxShadow: {
    primary: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    secondary: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
  },

  bold_24px: {
    ...fontBold,
    fontSize: "1.5rem",
    color: COLORS.LIGHT_THEME.TEXT,
  },
  bold_16px: {
    ...fontBold,
    fontSize: "1rem",
    color: COLORS.LIGHT_THEME.TEXT,
    textTransform: "capitalize",
  },
  normal_18px: {
    ...fontNormal,
    fontSize: "1.125rem",
    color: COLORS.LIGHT_THEME.TEXT,
  },
  normal_16px: {
    ...fontNormal,
    fontSize: "1rem",
    color: COLORS.LIGHT_THEME.TEXT,
  },
  normal_14px: {
    ...fontNormal,
    fontSize: "0.875rem",
    color: COLORS.LIGHT_THEME.TEXT,
  },
  price_up: {
    ...fontNormal,
    fontSize: "1rem",
    color: GRAPH_COLORS.LIGHT_THEME.FIRST,
  },
  price_down: {
    ...fontNormal,
    fontSize: "1rem",
    color: GRAPH_COLORS.LIGHT_THEME.THIRD,
  },
  sidebar_active_text: {
    ...fontBold,
    fontSize: "1rem",
    color: COLORS.LIGHT_THEME.BACKGROUND,
    textTransform: "capitalize",
    userSelect: "none",
  },
  sidebar_inactive_text: {
    ...fontBold,
    fontSize: "1rem",
    color: COLORS.LIGHT_THEME.SECONDARY_BACKGROUND,
    textTransform: "capitalize",
    userSelect: "none",
  },
  user_name_tag: {
    ...fontBold,
    fontSize: "1.5rem",
    color: COLORS.LIGHT_THEME.BACKGROUND,
    userSelect: "none",
  },
  form_validation: {
    ...fontNormal,
    height: "1.2rem",
    fontSize: "0.875rem",
    color: COLORS.LIGHT_THEME.LIGHT_RED,
  },
};
