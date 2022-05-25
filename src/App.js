import { HashRouter } from "react-router-dom";

import RoutesManager from "./routes/RoutesManager";
import NatificationProvider from "./services/errorContext";
import ThemeContextProvider from "./services/themeContext";

function App() {
  return (
    <ThemeContextProvider>
      <NatificationProvider>
        <HashRouter>
          <RoutesManager />
        </HashRouter>
      </NatificationProvider>
    </ThemeContextProvider>
  );
}

export default App;
