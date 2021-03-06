import { HashRouter } from "react-router-dom";

import { GlobalStyle } from "./GlobalStyle";
import RoutesManager from "./routes/RoutesManager";
import NatificationProvider from "./services/errorContext";
import KeysContextProvider from "./services/keyContext";
import ThemeContextProvider from "./services/themeContext";

function App() {
  return (
    <ThemeContextProvider>
      <NatificationProvider>
        <KeysContextProvider>
          <HashRouter>
            <GlobalStyle />
            <RoutesManager />
          </HashRouter>
        </KeysContextProvider>
      </NatificationProvider>
    </ThemeContextProvider>
  );
}

export default App;
