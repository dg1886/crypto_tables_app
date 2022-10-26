import { HashRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import { GlobalStyle } from "./GlobalStyle";
import RoutesManager from "./routes/RoutesManager";
import NotificationProvider from "./services/errorContext";
import ThemeContextProvider from "./services/themeContext";

function App() {
  return (
    <RecoilRoot>
      <ThemeContextProvider>
        <NotificationProvider>
          <HashRouter>
            <GlobalStyle />
            <RoutesManager />
          </HashRouter>
        </NotificationProvider>
      </ThemeContextProvider>
    </RecoilRoot>
  );
}

export default App;
