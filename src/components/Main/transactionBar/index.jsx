import React from "react";

import FlexBox from "../../CommonUI/FlexBox";
import BitcoinIcon from "../../CommonUI/Icons/BitcoinIcon";
import BnbIcon from "../../CommonUI/Icons/BnbIcon";
import EthereumIcon from "../../CommonUI/Icons/UsdcIcon";
import Typography from "../../Typography";
import Transaction, { Border, Content, Tittle } from "./TransactionBar";

const coinNames = [
  { name: "bitcoin", icon: <BitcoinIcon />, info: "Buy" },
  { name: "ethirium", icon: <EthereumIcon />, info: "Sell" },
  { name: "bnb", icon: <BnbIcon />, info: "Buy" },
  { name: "cardano", icon: <EthereumIcon />, info: "Buy" },
  { name: "solana", icon: <BnbIcon />, info: "Sell" },
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
                  {data?.close}$44400
                </Typography>
                <Typography variant="normal_14px" padding="0 1rem">Today,15PM{data?.time_start}</Typography>
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
