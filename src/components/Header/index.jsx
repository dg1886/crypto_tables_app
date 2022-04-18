import { useLocation } from "react-router-dom";

import FlexBox from "../CommonUI/FlexBox";
import Input from "../CommonUI/Input";
import { Subtitle } from "../Text/Subtitle";
import UserMenu from "./UserMenu";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname.slice(1).toUpperCase();

  return (
    <FlexBox width="100%" height="6rem" justifyContent="space-between" padding="0 11.2rem 0 2rem">
      <Subtitle userSelect="none">{pathname}</Subtitle>
      <Input />
      <UserMenu />
    </FlexBox>
  );
};

export default Header;
