import { ThemeProvider } from "styled-components";

import Header from "./components/Header";
import { baseTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
