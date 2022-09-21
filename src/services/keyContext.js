import {
  createContext, useCallback, useMemo, useState,
} from "react";

export const KeysContext = createContext(null);

const KeysContextProvider = ({ children }) => {
  const [randomKey, setRandomKey] = useState(process.env.REACT_APP_API_KEY1);

  const keys = Object.values(process.env);
  const lengthKeys = keys.length;

  const randomApiKeys = useCallback(() => {
    const getRandomKey = () => keys[Math.floor(Math.random() * lengthKeys)];
    setRandomKey(getRandomKey());
  }, [keys, lengthKeys]);

  const contextValue = useMemo(() => ({
    randomApiKeys,
    randomKey,

  }), [randomKey, randomApiKeys]);
  return (
    <KeysContext.Provider value={contextValue}>
      {children}
    </KeysContext.Provider>
  );
};

export default KeysContextProvider;
