import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";

import BtcUsdPeriodOHLC, { ValidPeriods } from "../../../api/coinapi";
import FlexBox from "../../CommonUI/FlexBox";
import BitcoinIcon from "../../CommonUI/Icons/BitcoinIcon";
import BnbIcon from "../../CommonUI/Icons/BnbIcon";
import EthereumIcon from "../../CommonUI/Icons/UsdcIcon";
import { prepareDateToGraphs } from "../../Helpers/helperData";
import Typography from "../../Typography";
import Graph from "./Graph";
import Marketing, {
  Border, Content, Head, Tittle,
} from "./MarketingBar";

const coinNames = [
  { name: "bitcoin", icon: <BitcoinIcon /> },
  { name: "ethirium", icon: <EthereumIcon /> },
  { name: "bnb", icon: <BnbIcon /> },
];

const percentDirection = ["↓", "-", "↑"];

const MarketingBar = () => {
  const [data, setData] = useState({ day7: [], hours24: [] });
  const { graphColors } = useTheme();

  const changesPrice = (1 + Math.sign(data.procent7Day) ? "price_up" : "price_down");
  const changesPercent = percentDirection[1 + Math.sign(data.procent7Day)];

  useEffect(() => {
    const fetchData = async () => {
      let prepareDataHouhrs = "";
      let prepareDataWeek = "";
      let procent7Day = "";
      let procent24Hour = "";
      let volume24 = "";
      let marketCap = "";
      let price = "";
      await BtcUsdPeriodOHLC(ValidPeriods.HOUR24).then((res) => {
        prepareDataHouhrs = prepareDateToGraphs(res);
        procent24Hour = (
          (prepareDataHouhrs[prepareDataHouhrs.length - 1].close * 100) / prepareDataHouhrs[0].open - 100
        ).toFixed(2);
        volume24 = (prepareDataHouhrs.map((i) => i.volume).reduce((acc, cur) => acc + cur)).toFixed(4);
        price = prepareDataHouhrs[0].open;
      });
      await BtcUsdPeriodOHLC(ValidPeriods.DAYS7).then((res) => {
        prepareDataWeek = prepareDateToGraphs(res);
        procent7Day = (
          (prepareDataWeek[prepareDataWeek.length - 1].close * 100) / prepareDataWeek[0].open - 100
        ).toFixed(2);
        marketCap = (prepareDataWeek.map((i) => i.volume).reduce((acc, cur) => acc + cur)).toFixed(4);
      });
      setData({
        hours24: prepareDataHouhrs, day7: prepareDataWeek, procent24Hour, procent7Day, volume24, marketCap, price,
      });
    };
    fetchData();
  }, []);

  return (
    <Marketing>

      <Tittle><Typography variant="bold_16px">Marketing Values</Typography></Tittle>
      <Border />

      <Head>
        <Typography variant="normal_16px">Name</Typography>
        <Typography variant="normal_16px">Price</Typography>
        <Typography variant="normal_16px">%7d</Typography>
        <Typography variant="normal_16px">%24h</Typography>
        <Typography variant="normal_16px">Market Cap</Typography>
        <Typography variant="normal_16px">24h Volume</Typography>
        <Typography variant="normal_16px">Last 7 Days</Typography>
      </Head>

      {coinNames.map((item, index) => {
        return (
          <Content backColor={index % 2 ? "background" : "backgroundItems"} key={item.name}>

            <FlexBox backColor={index % 2 ? "background" : "backgroundItems"} justifyContent="flex-start">
              {item.icon}
              <Typography variant="bold_16px" padding="0 1rem">{item.name}</Typography>
            </FlexBox>

            <Typography variant="normal_16px">
              ${data.price}
            </Typography>

            <Typography variant={changesPrice}>
              {changesPercent}
              {Math.abs(data.procent7Day)}%
            </Typography>

            <Typography variant={changesPrice}>
              {changesPercent}
              {Math.abs(data.procent24Hour)}%
            </Typography>

            <Typography variant="normal_16px">
              ${data.marketCap}
            </Typography>

            <Typography variant="normal_16px">
              ${data.volume24}
            </Typography>

            <Graph data={data.day7} color={graphColors[1 + Math.sign(data.procent7Day)]} />

          </Content>

        );
      })}

    </Marketing>

  );
};

export default MarketingBar;
