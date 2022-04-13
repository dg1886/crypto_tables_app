import { ThemeProvider } from "styled-components";

import MainPage from "./page/MainPage";
import { baseTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <MainPage />
    </ThemeProvider>

  );
}

export default App;
