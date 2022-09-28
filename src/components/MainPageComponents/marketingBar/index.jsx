import React, { useContext, useEffect, useState } from "react";
import { useTheme } from "styled-components";

import { ErrorContext } from "../../../services/errorContext";
import { InfoForGraphContext } from "../../../services/infoForGraphContext";
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
  {
    name: "bitcoin",
    icon: <BitcoinIcon />,
  },
  {
    name: "ethereum",
    icon: <EthereumIcon />,
  },
  {
    name: "bnb",
    icon: <BnbIcon />,
  },
];

const percentDirection = ["↓", "-", "↑"];

const getPercents = (response) => {
  return ((response[response.length - 1].close * 100) / response[0].open - 100
  ).toFixed(2);
};

const getVolumeMaket = (response) => {
  return (response.map((i) => i.volume)
    .reduce((acc, cur) => acc + cur)).toFixed(4);
};

const MarketingBar = () => {
  const [data, setData] = useState(
    {
      weekData: [],
      hours24Data: [],
      percent24Hour: "",
      percent7Days: "",
      volume24: "",
      marketCap: "",
      price: "",
    },
  );
  const { graphColors } = useTheme();
  const { createNotification } = useContext(ErrorContext);
  const {
    marketingGraph,
    marketingNumbers,
  } = useContext(InfoForGraphContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const prepareDataHouhrs = await prepareDateToGraphs(marketingGraph);
        const prepareDataWeek = await prepareDateToGraphs(marketingNumbers);

        setData({
          hours24Data: prepareDataHouhrs,
          weekData: prepareDataWeek,
          percent24Hour: getPercents(prepareDataHouhrs),
          percent7Days: getPercents(prepareDataWeek),
          volume24: getVolumeMaket(prepareDataHouhrs),
          marketCap: getVolumeMaket(prepareDataWeek),
          price: prepareDataHouhrs[0].open,
        });
      } catch (error) {
        createNotification(error.message);
      }
    };
    fetchData();
  }, [marketingGraph, marketingNumbers, createNotification]);

  const changesPrice = (1 + Math.sign(data.percent7Days) ? "price_up" : "price_down");
  const changesPercent = percentDirection[1 + Math.sign(data.percent7Days)];

  if (!data.weekData.length) {
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
          <GridTableBody key={item.name}>
            <Content>

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

              <Graph data={data.weekData} color={graphColors[1 - Math.sign(data.percent7Days)]} />

            </Content>

          </GridTableBody>
        );
      })}

    </Marketing>

  );
};

export default MarketingBar;
