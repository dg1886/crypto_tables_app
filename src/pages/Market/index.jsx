import FlexBox from "../../components/CommonUI/FlexBox";
import Typography from "../../components/CommonUI/Typography";

const Market = () => {
  return (
    <FlexBox
      width="100%"
      height="calc(100% - 8rem)"
      flexDirection="column"
      padding="0 1.5rem 2rem 2rem"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="bold_24px">Market coming soon...</Typography>
    </FlexBox>
  );
};

export default Market;
