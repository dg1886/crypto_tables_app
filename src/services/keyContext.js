import {
  createContext, useCallback, useMemo, useState,
} from "react";

export const KeysContext = createContext(null);

const KeysContextProvider = ({ children }) => {
  const [mainApiKey, setMainApiKey] = useState(process.env.REACT_APP_API_KEY1);
  const [lineChartApiKey, setLineChartApiKey] = useState(process.env.REACT_APP_API_KEY2);
  const [marketingApiKey, setMarketingApiKey] = useState(process.env.REACT_APP_API_KEY3);

  const keys = Object.values(process.env);
  const lengthKeys = keys.length;

  const randomApiKeys = useCallback(() => {
    const randomKey = () => keys[Math.floor(Math.random() * lengthKeys)];
    setMainApiKey(randomKey());
    setLineChartApiKey(randomKey());
    setMarketingApiKey(randomKey());
  }, [keys]);

  const contextValue = useMemo(() => ({
    randomApiKeys,
    mainApiKey,
    lineChartApiKey,
    marketingApiKey,
  }), [mainApiKey, lineChartApiKey, marketingApiKey, randomApiKeys]);
  return (
    <KeysContext.Provider value={contextValue}>
      {children}
    </KeysContext.Provider>
  );
};

export default KeysContextProvider;
