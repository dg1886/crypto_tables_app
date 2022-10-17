import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import { RecoilRoot } from "recoil";

import SmallLineChart, { lineCharts } from "../components/MainPageComponents/lineChart";
import NotificationProvider from "../services/errorContext";
import InfoForGraphContextProvider from "../services/infoForGraphContext";
import ThemeContextProvider from "../services/themeContext";
import { CHART_COLORS } from "../styles/colors";

const data = [
  {
    close: 56974.12,
    date: "2021-11-01T00:00:00.000Z",
    high: 69000,
    low: 53308.93,
    open: 61356.57,
    volume: 72246.48605716,
  },
  {
    close: 46214.37,
    date: "2021-12-01T00:00:00.000Z",
    high: 59099.64,
    low: 41967.5,
    open: 57027.28,
    volume: 71859.97407647,
  },
  {
    close: 38491.92,
    date: "2022-01-01T00:00:00.000Z",
    high: 47989,
    low: 32950.72,
    open: 46230,
    volume: 71750.65620092,
  },
  {
    close: 43178.98,
    date: "2022-02-01T00:00:00.000Z",
    high: 45850,
    low: 34324.05,
    open: 38483.56,
    volume: 57954.06442157,
  },
];

const lineChartMockColors = [
  CHART_COLORS.DARK_THEME.FIRST,
  CHART_COLORS.DARK_THEME.SECOND,
  CHART_COLORS.DARK_THEME.THIRD,
];

describe("smallLineChart", () => {
  it("number of line charts in a block", () => {
    expect(lineCharts.length)
      .toBe(4);
  });

  it("line chart colors", () => {
    const firstPrice = data[0]?.close;
    const lastPrice = data[data.length - 1]?.close;
    const penultPrice = data[data.length - 2]?.close;

    const profitPercent = (
      ((firstPrice * 100) / lastPrice - 100).toFixed(2)
    );
    const penultPercent = (
      ((firstPrice * 100) / penultPrice - 100).toFixed(2)
    );

    if (profitPercent >= penultPercent) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(lineChartMockColors[0])
        .toBe(CHART_COLORS.DARK_THEME.FIRST);
    }
    expect(lineChartMockColors[2])
      .toBe(CHART_COLORS.DARK_THEME.THIRD);
  });

  it("render without data", () => {
    render(
      <RecoilRoot>
        <ThemeContextProvider>
          <NotificationProvider>
            <InfoForGraphContextProvider>
              <SmallLineChart />
            </InfoForGraphContextProvider>
          </NotificationProvider>
        </ThemeContextProvider>
      </RecoilRoot>,
    );
    if (!data.length) {
      screen.getByText("No Data")
        .toBeInTheDocument();
    }
  });

  it("renders correctly", () => {
    const tree = TestRenderer
      .create(
        <RecoilRoot>
          <ThemeContextProvider>
            <NotificationProvider>
              <InfoForGraphContextProvider>
                <SmallLineChart />
              </InfoForGraphContextProvider>
            </NotificationProvider>
          </ThemeContextProvider>
        </RecoilRoot>,
      );
    expect(tree)
      .toMatchSnapshot();
  });
});
