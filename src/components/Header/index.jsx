import FlexBox from "../CommonUI/FlexBox";
import Tittle from "../CommonUI/Tittle";
import UserMenu from "./UserMenu";

const Header = () => {
  return (
    <FlexBox
      width="100%"
      height="8rem"
      justifyContent="space-between"
      padding="0 2rem"
    >

      <Tittle>Dashboard</Tittle>

      <FlexBox>
        <input type="text" /> {/* заглушка т.к. будет переиспользован кастомный инпут Сережи */}
        <UserMenu />
      </FlexBox>

    </FlexBox>
  );
};

export default Header;
