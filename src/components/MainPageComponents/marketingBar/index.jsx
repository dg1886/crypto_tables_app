import React, {
  useContext, useLayoutEffect, useState,
} from "react";
import { useTheme } from "styled-components";

import { BtcUsdOHLCRequest, ValidPeriods } from "../../../api/coinapi";
import { ErrorContext } from "../../../services/errorContext";
import { KeysContext } from "../../../services/keyContext";
import FlexBox from "../../CommonUI/FlexBox";
import BitcoinIcon from "../../CommonUI/Icons/BitcoinIcon";
import BnbIcon from "../../CommonUI/Icons/BnbIcon";
import EthereumIcon from "../../CommonUI/Icons/UsdcIcon";
import Typography from "../../CommonUI/Typography";
import { prepareDateToGraphs } from "../../Helpers/prepareDatatoGraphs";
import Graph from "./Graph";
import Marketing, {
  Content, GridTableBody, Head, Tittle,
} from "./style";

const coinNames = [
  { name: "bitcoin", icon: <BitcoinIcon /> },
  { name: "ethereum", icon: <EthereumIcon /> },
  { name: "bnb", icon: <BnbIcon /> },
];

const percentDirection = ["↓", "-", "↑"];

const getPercents = (response) => {
  return ((response[response.length - 1].close * 100) / response[0].open - 100
  ).toFixed(2);
};

const getVolumeMaket = (response) => {
  return (response.map((i) => i.volume).reduce((acc, cur) => acc + cur)).toFixed(4);
};

const MarketingBar = () => {
  const [data, setData] = useState(
    {
      day7: [],
      hours24: [],
      percent24Hour: "",
      percent7Days: "",
      volume24: "",
      marketCap: "",
      price: "",
    },
  );
  const { graphColors } = useTheme();

  const { createNatification } = useContext(ErrorContext);
  const { marketingApiKey } = useContext(KeysContext);

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const [twentyFourHoursResponse, weekResponse] = await Promise.all(
          [
            BtcUsdOHLCRequest(ValidPeriods.HOUR24, marketingApiKey),
            BtcUsdOHLCRequest(ValidPeriods.DAYS7, marketingApiKey),
          ],
        );

        const prepareDataHouhrs = prepareDateToGraphs(twentyFourHoursResponse);
        const prepareDataWeek = prepareDateToGraphs(weekResponse);

        setData({
          hours24: prepareDataHouhrs,
          day7: prepareDataWeek,
          percent24Hour: getPercents(prepareDataHouhrs),
          percent7Days: getPercents(prepareDataWeek),
          volume24: getVolumeMaket(prepareDataHouhrs),
          marketCap: getVolumeMaket(prepareDataWeek),
          price: prepareDataHouhrs[0].open,
        });
      } catch (error) {
        createNatification(error.message);
      }
    };
    fetchData();
  }, [marketingApiKey, createNatification]);

  const changesPrice = (1 + Math.sign(data.percent7Days) ? "price_up" : "price_down");
  const changesPercent = percentDirection[1 + Math.sign(data.percent7Days)];

  if (!data.day7.length) {
    return (
      <Marketing>
        <Tittle><Typography variant="bold_16px">Marketing Values</Typography></Tittle>
        <Head>
          <Typography variant="normal_16px">Name</Typography>
          <Typography variant="normal_16px">Price</Typography>
          <Typography variant="normal_16px">%7d</Typography>
          <Typography variant="normal_16px">%24h</Typography>
          <Typography variant="normal_16px">Market Cap</Typography>
          <Typography variant="normal_16px">24h Volume</Typography>
          <Typography variant="normal_16px">Last 7 Days</Typography>
        </Head>
        <Typography variant="bold_16px" margin="0 auto" padding="3rem 0">No Data</Typography>
      </Marketing>
    );
  }
  return (
    <Marketing>

      <Tittle><Typography variant="bold_16px">Marketing Values</Typography></Tittle>

      <Head>
        <Typography variant="normal_16px">Name</Typography>
        <Typography variant="normal_16px">Price</Typography>
        <Typography variant="normal_16px">%7d</Typography>
        <Typography variant="normal_16px">%24h</Typography>
        <Typography variant="normal_16px">Market Cap</Typography>
        <Typography variant="normal_16px">24h Volume</Typography>
        <Typography variant="normal_16px">Last 7 Days</Typography>
      </Head>

      {coinNames.map((item) => {
        return (
          <GridTableBody>
            <Content key={item.name}>

              <FlexBox justifyContent="flex-start">
                {item.icon}
                <Typography variant="bold_16px" padding="0 1rem">{item.name}</Typography>
              </FlexBox>

              <Typography variant="normal_16px">
                ${data.price}
              </Typography>

              <Typography variant={changesPrice}>
                {changesPercent}
                {Math.abs(data.percent7Days)}%
              </Typography>

              <Typography variant={changesPrice}>
                {changesPercent}
                {Math.abs(data.percent24Hour)}%
              </Typography>

              <Typography variant="normal_16px">
                ${data.marketCap}
              </Typography>

              <Typography variant="normal_16px">
                ${data.volume24}
              </Typography>

              <Graph data={data.day7} color={graphColors[1 - Math.sign(data.percent7Days)]} />

            </Content>
          </GridTableBody>
        );
      })}

    </Marketing>

  );
};

export default MarketingBar;
