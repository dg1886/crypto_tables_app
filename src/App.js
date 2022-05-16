import { BrowserRouter } from "react-router-dom";

import RoutesManager from "./routes/RoutesManager";
import NatificationProvider from "./services/errorContext";
import ThemeContextProvider from "./services/themeContext";

function App() {
  return (
    <ThemeContextProvider>
      <NatificationProvider>
        <BrowserRouter>
          <RoutesManager />
        </BrowserRouter>
      </NatificationProvider>
    </ThemeContextProvider>
  );
}

export default App;
