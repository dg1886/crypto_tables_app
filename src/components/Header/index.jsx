import FlexBox from "../CommonUI/FlexBox";
import Typography from "../Typography";
import UserMenu from "./UserMenu";

const Header = () => {
  return (
    <FlexBox
      width="100%"
      height="8rem"
      justifyContent="space-between"
      padding="0 2rem"
    >

      <Typography variant="bold_24px" userSelect="none" textTransform="capitalize">Dashboard</Typography>

      <FlexBox>
        <input type="text" />
        <UserMenu />
      </FlexBox>

    </FlexBox>
  );
};

export default Header;
