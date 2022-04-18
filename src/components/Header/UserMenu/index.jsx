import { useMemo, useState } from "react";

import { useLogout } from "../../../hooks/useLogout";
import { ClickOutsideBackground } from "../../CommonUI/ClickOutsideBackground";
import {
  Action, Li, Menu, Profile, Ul, UserLogout, UserNameTag,
} from "./styled";

const UserMenu = () => {
  const logout = useLogout("/login");
  const [isOpen, setIsOpen] = useState(false);

  const user = useMemo(() => {
    return JSON.parse(localStorage.getItem("user"));
  }, []);

  const userName = user?.email.split("")[0];
  const userRole = user?.role ?? "none-role";
  const userEmail = user?.email;

  const toggleMenu = () => {
    setIsOpen((state) => !state);
  };

  return (
    <Action>
      <Profile onClick={toggleMenu}>
        <UserNameTag>{userName}</UserNameTag>
      </Profile>

      <Menu isOpen={isOpen}>
        <Ul>
          <Li>{`Role: ${userRole}`}</Li>
          <Li>{userEmail}</Li>
          <UserLogout onClick={logout}>Log out</UserLogout>
        </Ul>
      </Menu>
      {isOpen && <ClickOutsideBackground onClick={() => setIsOpen(false)} />}
    </Action>
  );
};

export default UserMenu;
