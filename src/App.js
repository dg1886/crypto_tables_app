import { ThemeProvider } from "styled-components";

import RegistrationPage from "./page/RegistrationPage";
import { baseTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <RegistrationPage />
    </ThemeProvider>

  );
}

export default App;
