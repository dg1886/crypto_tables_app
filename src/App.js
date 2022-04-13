import { ThemeProvider } from "styled-components";

import FlexBox from "./components/commonUI/FlexBox";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { baseTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <FlexBox
        width="100vw"
        height="100vh"
        flexDirection="column"
      >
        <Header />
        <FlexBox
          width="100%"
          height="100%"
          flexDirection="row"
          justifyContent="flex-start"
        >
          <Sidebar />
        </FlexBox>
      </FlexBox>
    </ThemeProvider>
  );
}

export default App;
