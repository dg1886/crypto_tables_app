import FlexBox from "../components/CommonUI/FlexBox";
import Header from "../components/Header";
import MainContent from "../components/Main";
import Navigation from "../components/Navigation";

const MainPage = () => {
  return (
    <FlexBox width="100vw" height="100vh">

      <Navigation />

      <FlexBox width="100%" height="100%" flexDirection="column" justifyContent="space-between">
        <Header />
        <MainContent />
      </FlexBox>

    </FlexBox>
  );
};

export default MainPage;
