import {
  createContext, useCallback, useMemo, useState,
} from "react";

export const KeysContext = createContext(null);

const KeysContextProvider = ({ children }) => {
  const [apiKey, setApiKey] = useState(process.env.REACT_APP_API_KEY1);

  const keys = [
    process.env.REACT_APP_API_KEY1,
    process.env.REACT_APP_API_KEY2,
    process.env.REACT_APP_API_KEY3,
    process.env.REACT_APP_API_KEY4,
    process.env.REACT_APP_API_KEY5,
    process.env.REACT_APP_API_KEY6,
    process.env.REACT_APP_API_KEY7,
    process.env.REACT_APP_API_KEY8,
    process.env.REACT_APP_API_KEY9,
    process.env.REACT_APP_API_KEY10,
  ];

  const randomApiKeys = useCallback(() => {
    const lengthKeys = keys.length;
    const randomKey = keys[Math.floor(Math.random() * lengthKeys)];
    return setApiKey(randomKey);
  }, [apiKey]);

  const contextValue = useMemo(() => ({
    randomApiKeys,
    apiKey,
  }), [apiKey, randomApiKeys]);
  return (
    <KeysContext.Provider value={contextValue}>
      {children}
    </KeysContext.Provider>
  );
};

export default KeysContextProvider;
