import FlexBox from "../components/CommonUI/FlexBox";
import Header from "../components/Header";
import MainContent from "../components/Main";
import Sidebar from "../components/Sidebar";

const MainPage = () => {
  return (
    <FlexBox width="100vw" height="100vh">

      <Sidebar />

      <FlexBox width="100%" height="100%" flexDirection="column" padding="0 1.5rem 2rem 2rem" justifyContent="space-between">
        <Header />
        <MainContent />
      </FlexBox>

    </FlexBox>
  );
};

export default MainPage;
