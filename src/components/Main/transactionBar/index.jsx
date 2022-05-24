import dayjs from "dayjs";
import React from "react";

import FlexBox from "../../CommonUI/FlexBox";
import BitcoinIcon from "../../CommonUI/Icons/BitcoinIcon";
import CardanoIcon from "../../CommonUI/Icons/Cardano";
import PolkadotIcon from "../../CommonUI/Icons/Polkadot";
import SolanaIcon from "../../CommonUI/Icons/Solana";
import EthereumIcon from "../../CommonUI/Icons/UsdcIcon";
import Typography from "../../Typography";
import Transaction, { Border, Content, Tittle } from "./style";

const coinNames = [
  { name: "bitcoin", icon: <BitcoinIcon />, info: "Buy" },
  { name: "ethereum", icon: <EthereumIcon />, info: "Sell" },
  { name: "polkadot", icon: <PolkadotIcon />, info: "Buy" },
  { name: "cardano", icon: <CardanoIcon />, info: "Buy" },
  { name: "solana", icon: <SolanaIcon />, info: "Sell" },
];

const TransactionBar = ({ data }) => {
  return (
    <Transaction>
      <Tittle>
        <Typography variant="bold_16px">Recent transaction</Typography>
      </Tittle>
      <Border />
      {coinNames.map((item, index) => {
        return (
          <React.Fragment key={item.name + 1}>
            <Content backColor={index % 2 === 1 ? "backgroundItems" : "background"} key={item.name}>
              {item.icon}

              <FlexBox backColor={index % 2 === 1 ? "backgroundItems" : "background"} alignItems="flex-start" flexDirection="column">
                <Typography variant="bold_16px" padding="0 1rem">{item.name}</Typography>
                <Typography variant="normal_14px" padding="0 1rem">{item.info}</Typography>
              </FlexBox>

              <FlexBox backColor={index % 2 === 1 ? "backgroundItems" : "background"} alignItems="flex-end" flexDirection="column">
                <Typography variant="bold_16px">
                  {data[0]?.close}$
                </Typography>
                <Typography variant="normal_14px">{dayjs(data[0]?.date).format("ddd, HH:mm A")}</Typography>
              </FlexBox>

            </Content>
            {index % 2 === 1 ? <Border key={item.name + 2} /> : null}
          </React.Fragment>
        );
      })}

    </Transaction>
  );
};

export default TransactionBar;
