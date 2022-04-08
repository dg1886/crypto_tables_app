import { useRef, useState } from "react";

import useClickOutside from "../../hooks/useClickOutside";
import {
  Action, H4, Li, Menu, Profile, Ul, UserLogout, UserNameTag,
} from "./styled";

const UserMenu = () => {
  const clickRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((state) => !state);
  };

  const domNode = useClickOutside(clickRef, () => {
    setIsOpen(false);
  });

  return (
    <>
      <Action ref={domNode}>
        <Profile onClick={toggleMenu}>
          <UserNameTag>D</UserNameTag> {/* заглушка, предполагается вывод первой буквы логина пользователя */}
        </Profile>

        <Menu isOpen={isOpen}>
          <H4>User Name</H4>
          <Ul>
            <Li>userEmail@gmail.com</Li>
            <UserLogout>Log out</UserLogout>
          </Ul>
        </Menu>
      </Action>
    </>
  );
};

export default UserMenu;
