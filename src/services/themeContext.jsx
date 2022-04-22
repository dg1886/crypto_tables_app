import { createContext, useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";

import * as theme from "../styles/theme";

export const ThemeContext = createContext(null);

const ThemeContextProvider = ({ children }) => {
  const [themeName, setTheme] = useState("dark");

  const contextValue = useMemo(() => ({
    themeName,
    setTheme,
  }), [setTheme, themeName]);
  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme[themeName]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
