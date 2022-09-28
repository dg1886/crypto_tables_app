import { useMemo } from "react";
import { useLocation } from "react-router-dom";

import Input from "../CommonUI/Input";
import Typography from "../CommonUI/Typography";
import { MainWrapper, PathnameContainer } from "./style";
import UserMenu from "./UserMenu";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname.slice(1).toUpperCase();
  const user = useMemo(() => {
    return JSON.parse(localStorage.getItem("user"));
  }, []);

  return (
    <MainWrapper width="100%" height="6rem" justifyContent="space-between">
      <PathnameContainer>
        <Typography variant="bold_24px" userSelect="none" textTransform="capitalize">{pathname}</Typography>
      </PathnameContainer>

      <Input margin="0.1rem 1rem 0.2rem 1rem" />
      <UserMenu user={user} />

    </MainWrapper>
  );
};

export default Header;
