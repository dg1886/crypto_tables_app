import {
  createContext, useCallback, useMemo, useState,
} from "react";

export const KeysContext = createContext(null);

const KeysContextProvider = ({ children }) => {
  const [apiKey, setApiKey] = useState(process.env.REACT_APP_API_KEY1);

  const keys = Object.values(process.env);

  const randomApiKeys = useCallback(() => {
    const lengthKeys = keys.length;
    const randomKey = keys[Math.floor(Math.random() * lengthKeys)];
    setApiKey(randomKey);
  }, [keys]);

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
