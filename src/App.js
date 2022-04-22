import MainPage from "./page/MainPage";
import ThemeContextProvider from "./services/themeContext";

function App() {
  return (
    <ThemeContextProvider>
      <MainPage />
    </ThemeContextProvider>
  );
}

export default App;
