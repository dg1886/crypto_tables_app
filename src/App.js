import { ThemeProvider } from "styled-components";

import LoginPage from "./page/LoginPage";
import { baseTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <LoginPage />
    </ThemeProvider>

  );
}

export default App;
