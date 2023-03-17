import {
  createContext, useContext, useEffect, useState,
} from "react";
import { useRecoilValue } from "recoil";

import { mockGraph } from "../__mocks__/moc";
import { BtcUsdOHLCRequest, ValidPeriods } from "../api/coinapi";
import { synchronousRequst } from "../components/Helpers/asyncRecursion";
import { defaultApiKeyState } from "../state/atoms/apiKeysState";
import { ErrorContext } from "./errorContext";

export const InfoForGraphContext = createContext(null);

const InfoForGraphContextProvider = ({ children }) => {
  const apiKey = useRecoilValue(defaultApiKeyState);
  const { createNotification } = useContext(ErrorContext);
  const [infoGraph, setInfoGraph] = useState({
    mainGraph: [],
    lineChartGraph: [],
    transactionGraph: [],
    marketingGraph: [],
    marketingNumbers: [],
  });

  const mainGraphsRequest = () => BtcUsdOHLCRequest(ValidPeriods.DAY, apiKey);
  const lineChartRequest = () => BtcUsdOHLCRequest(ValidPeriods.MONTH, apiKey);
  const transactionRequest = () => BtcUsdOHLCRequest(ValidPeriods.MONTH, apiKey);
  const marketingGraphRequest = () => BtcUsdOHLCRequest(ValidPeriods.HOUR24, apiKey);
  const marketingNumbersRequest = () => BtcUsdOHLCRequest(ValidPeriods.DAYS7, apiKey);

  const arrayRequests = [
    mainGraphsRequest, lineChartRequest, transactionRequest, marketingGraphRequest, marketingNumbersRequest,
  ];

  const storageUseMoc = localStorage.getItem("useMoc");

  useEffect(() => {
    if (storageUseMoc === "true") {
      setInfoGraph({
        mainGraph: mockGraph.mainGraph,
        lineChartGraph: mockGraph.lineChartGraph,
        transactionGraph: mockGraph.transactionGraph,
        marketingGraph: mockGraph.marketingGraph,
        marketingNumbers: mockGraph.marketingNumbers,
      });
      return;
    }
    const fetch = async () => {
      const [mainGraph,
        lineChartGraph,
        transactionGraph,
        marketingGraph,
        marketingNumbers] = await synchronousRequst(arrayRequests, createNotification);

      setInfoGraph({
        mainGraph,
        lineChartGraph,
        transactionGraph,
        marketingGraph,
        marketingNumbers,
      });
    };
    fetch();
  }, [storageUseMoc, apiKey]);

  return (
    <InfoForGraphContext.Provider value={infoGraph}>
      {children}
    </InfoForGraphContext.Provider>
  );
};

export default InfoForGraphContextProvider;
