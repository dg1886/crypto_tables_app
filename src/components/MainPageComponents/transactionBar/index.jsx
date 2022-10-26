import dayjs from "dayjs";
import React, { useContext, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { ErrorContext } from "../../../services/errorContext";
import { defaultApiKeyState } from "../../../state/atoms/apiKeysState";
import { transactionState } from "../../../state/atoms/infoGraphState";
import FlexBox from "../../CommonUI/FlexBox";
import BitcoinIcon from "../../CommonUI/Icons/BitcoinIcon";
import CardanoIcon from "../../CommonUI/Icons/Cardano";
import PolkadotIcon from "../../CommonUI/Icons/Polkadot";
import SolanaIcon from "../../CommonUI/Icons/Solana";
import EthereumIcon from "../../CommonUI/Icons/UsdcIcon";
import Typography from "../../CommonUI/Typography";
import Transaction, { Content, GridTableBody, Tittle } from "./style";

const coinNames = [
  {
    name: "bitcoin",
    icon: <BitcoinIcon />,
    info: "Buy",
  },
  {
    name: "ethereum",
    icon: <EthereumIcon />,
    info: "Sell",
  },
  {
    name: "polkadot",
    icon: <PolkadotIcon />,
    info: "Buy",
  },
  {
    name: "cardano",
    icon: <CardanoIcon />,
    info: "Buy",
  },
  {
    name: "solana",
    icon: <SolanaIcon />,
    info: "Sell",
  },
];

const TransactionBar = () => {
  const { createNotification } = useContext(ErrorContext);
  const apiKey = useRecoilValue(defaultApiKeyState);
  const [data, setData] = useRecoilState(transactionState);

  useEffect(() => {
    setData({
      apiKey,
      createNotification,
    });
  }, [apiKey]);

  return (
    <Transaction>
      <Tittle>
        <Typography variant="bold_16px">Recent transaction</Typography>
      </Tittle>
      {coinNames.map((item) => {
        return (
          <GridTableBody key={item.name + 1}>
            <Content key={item.name}>
              {item.icon}

              <FlexBox alignItems="flex-start" flexDirection="column">
                <Typography variant="bold_16px" padding="0 1rem">{item.name}</Typography>
                <Typography variant="normal_14px" padding="0 1rem">{item.info}</Typography>
              </FlexBox>

              <FlexBox alignItems="flex-end" flexDirection="column">
                <Typography variant="bold_16px">
                  {data && data[0]?.close}$
                </Typography>
                <Typography variant="normal_14px">{dayjs(data && data[0]?.date)
                  .format("ddd, HH:mm A")}
                </Typography>
              </FlexBox>

            </Content>

          </GridTableBody>
        );
      })}

    </Transaction>
  );
};

export default TransactionBar;
