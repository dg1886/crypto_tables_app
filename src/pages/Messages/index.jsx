import FlexBox from "../../components/CommonUI/FlexBox";
import Typography from "../../components/CommonUI/Typography";

const Messages = () => {
  return (
    <FlexBox
      width="100%"
      height="calc(100% - 8rem)"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="bold_24px">Messages coming soon...</Typography>
    </FlexBox>
  );
};

export default Messages;
