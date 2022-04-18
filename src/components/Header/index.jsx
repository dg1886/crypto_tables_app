import FlexBox from "../CommonUI/FlexBox";
import Tittle from "../CommonUI/Tittle";
import UserMenu from "./UserMenu";

const Header = () => {
  return (
    <FlexBox width="100%" height="6rem" justifyContent="space-between">

      <Tittle>Dashboard</Tittle>

      <FlexBox>
        <input type="text" /> {/* заглушка т.к. будет переиспользован кастомный инпут Сережи */}
        <UserMenu />
      </FlexBox>

    </FlexBox>
  );
};

export default Header;
