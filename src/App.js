import { BrowserRouter } from "react-router-dom";

import RoutesManager from "./routes/RoutesManager";
import ThemeContextProvider from "./services/themeContext";

function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <RoutesManager />
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;
