import { useMemo } from "react";
import { useLocation } from "react-router-dom";

import FlexBox from "../CommonUI/FlexBox";
import Input from "../CommonUI/Input";
import Typography from "../Typography";
import { PathnameContainer } from "./styled";
import UserMenu from "./UserMenu";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname.slice(1).toUpperCase();
  const user = useMemo(() => {
    return JSON.parse(localStorage.getItem("user"));
  }, []);

  return (
    <FlexBox
      width="100%"
      height="6rem"
      justifyContent="flex-start"
      padding="0 2rem"
      zIndex="2"
    >
      <PathnameContainer>
        <Typography variant="bold_24px" userSelect="none" textTransform="capitalize">{pathname}</Typography>
      </PathnameContainer>
      <FlexBox>
        <Input margin="0.1rem 0.2rem 0.2rem 5rem" />
        <UserMenu user={user} />
      </FlexBox>

    </FlexBox>
  );
};

export default Header;
