import { useState } from "react";

import { useLogout } from "../../../hooks/useLogout";
import Typography from "../../CommonUI/Typography";
import {
  Action, H4, Li, Menu, OutsideBackground, Profile, Ul, UserLogout,
} from "./styled";

const UserMenu = ({ user }) => {
  const logout = useLogout("/login");
  const [isOpen, setIsOpen] = useState(false);
  const { email } = user;
  const userFirstLatter = user?.email?.split("")[0].toUpperCase();
  const mailIndex = email?.indexOf("@", 0);
  const name = email?.slice(0, mailIndex);

  const toggleMenu = () => {
    setIsOpen((state) => !state);
  };

  return (
    <Action>
      <Profile onClick={toggleMenu}>
        <Typography variant="user_name_tag">{userFirstLatter}</Typography>
      </Profile>

      <Menu isOpen={isOpen}>
        <H4>{name}</H4>
        <Ul>
          <Li>{email}</Li>
          <UserLogout onClick={logout}>Log out</UserLogout>
        </Ul>
      </Menu>
      {isOpen && <OutsideBackground onClick={() => setIsOpen(false)} />}
    </Action>
  );
};

export default UserMenu;
