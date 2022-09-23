import {
  createContext, useCallback, useContext, useEffect, useState,
} from "react";
import { useRecoilValue } from "recoil";

import { BtcUsdOHLCRequest, ValidPeriods } from "../api/coinapi";
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

  const synchronousRequst = useCallback(async (reqArr, onError) => {
    try {
      const [requestFunc, ...otherReq] = reqArr;
      const result = await requestFunc();

      if (otherReq.length === 0) {
        return [result];
      }

      const callRecursion = await synchronousRequst(otherReq);
      return [result, ...callRecursion];
    } catch (error) {
      onError(error.message);
      return null;
    }
  }, []);

  useEffect(() => {
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
  }, [apiKey]);

  return (
    <InfoForGraphContext.Provider value={infoGraph}>
      {children}
    </InfoForGraphContext.Provider>
  );
};

export default InfoForGraphContextProvider;
