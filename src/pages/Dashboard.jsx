import FlexBox from "../components/CommonUI/FlexBox";
import MainContent from "../components/Main";

const Dashboard = () => {
  return (
    <FlexBox
      width="100%"
      height="100%"
      flexDirection="column"
      padding="0 1.5rem 2rem 2rem"
      justifyContent="space-between"
    >
      <MainContent />
    </FlexBox>
  );
};

export default Dashboard;
