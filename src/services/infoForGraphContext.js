import {
  createContext, useCallback, useContext, useEffect, useState,
} from "react";

import { BtcUsdOHLCRequest, ValidPeriods } from "../api/coinapi";
import { ErrorContext } from "./errorContext";
import { KeysContext } from "./keyContext";

export const InfoForGraphContext = createContext(null);

const InfoForGraphContextProvider = ({ children }) => {
  const {
    randomKey,
  } = useContext(KeysContext);
  const { createNatification } = useContext(ErrorContext);
  const [infoGraph, setInfoGraph] = useState({
    mainGraph: [],
    lineChartGraph: [],
    transactionGraph: [],
    marketingGraph: [],
    marketingNumbers: [],
  });

  const mainGraphsRequest = () => BtcUsdOHLCRequest(ValidPeriods.DAY, randomKey);
  const lineChartRequest = () => BtcUsdOHLCRequest(ValidPeriods.MONTH, randomKey);
  const transactionRequest = () => BtcUsdOHLCRequest(ValidPeriods.MONTH, randomKey);
  const marketingGraphRequest = () => BtcUsdOHLCRequest(ValidPeriods.HOUR24, randomKey);
  const marketingNumbersRequest = () => BtcUsdOHLCRequest(ValidPeriods.DAYS7, randomKey);

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
        marketingNumbers] = await synchronousRequst(arrayRequests, createNatification);
      setInfoGraph({
        mainGraph,
        lineChartGraph,
        transactionGraph,
        marketingGraph,
        marketingNumbers,
      });
    };
    fetch();
  }, [randomKey]);

  return (
    <InfoForGraphContext.Provider value={infoGraph}>
      {children}
    </InfoForGraphContext.Provider>
  );
};

export default InfoForGraphContextProvider;
