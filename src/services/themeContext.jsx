import {
  createContext, useCallback, useMemo, useState,
} from "react";
import { ThemeProvider } from "styled-components";

import * as theme from "../styles/theme";

export const ThemeContext = createContext(null);

const ThemeContextProvider = ({ children }) => {
  const [themeName, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const changeTheme = useCallback((value) => {
    localStorage.setItem("theme", value);
    setTheme(value);
  }, []);

  const contextValue = useMemo(() => ({
    themeName,
    changeTheme,
  }), [changeTheme, themeName]);
  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme[themeName]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
