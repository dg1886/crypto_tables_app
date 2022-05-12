import { useState } from "react";

import { useLogout } from "../../../hooks/useLogout";
import Typography from "../../Typography";
import {
  Action, H4, Li, Menu, OutsideBackground, Profile, Ul, UserLogout,
} from "./styled";

const UserMenu = () => {
  const logout = useLogout("/login");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((state) => !state);
  };

  return (
    <Action>
      <Profile onClick={toggleMenu}>
        <Typography variant="user_name_tag">D</Typography>
      </Profile>

      <Menu isOpen={isOpen}>
        <H4>User Name</H4>
        <Ul>
          <Li>userEmail@gmail.com</Li>
          <UserLogout onClick={logout}>Log out</UserLogout>
        </Ul>
      </Menu>
      {isOpen && <OutsideBackground onClick={() => setIsOpen(false)} />}
    </Action>
  );
};

export default UserMenu;
