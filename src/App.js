import { HashRouter } from "react-router-dom";

import { GlobalStyle } from "./GlobalStyle";
import RoutesManager from "./routes/RoutesManager";
import NatificationProvider from "./services/errorContext";
import InfoForGraphContextProvider from "./services/infoForGraphContext";
import KeysContextProvider from "./services/keyContext";
import ThemeContextProvider from "./services/themeContext";

function App() {
  return (
    <ThemeContextProvider>
      <NatificationProvider>
        <KeysContextProvider>
          <InfoForGraphContextProvider>
            <HashRouter>
              <GlobalStyle />
              <RoutesManager />
            </HashRouter>
          </InfoForGraphContextProvider>
        </KeysContextProvider>
      </NatificationProvider>
    </ThemeContextProvider>
  );
}

export default App;
