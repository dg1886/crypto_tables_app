import { HashRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import { GlobalStyle } from "./GlobalStyle";
import RoutesManager from "./routes/RoutesManager";
import NotificationProvider from "./services/errorContext";
import InfoForGraphContextProvider from "./services/infoForGraphContext";
import ThemeContextProvider from "./services/themeContext";

function App() {
  return (
    <RecoilRoot>
      <ThemeContextProvider>
        <NotificationProvider>
          <InfoForGraphContextProvider>
            <HashRouter>
              <GlobalStyle />
              <RoutesManager />
            </HashRouter>
          </InfoForGraphContextProvider>
        </NotificationProvider>
      </ThemeContextProvider>
    </RecoilRoot>
  );
}

export default App;
