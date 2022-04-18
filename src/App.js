import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import RoutesManager from "./routes/RoutesManager";
import { baseTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <BrowserRouter>
        <RoutesManager />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
