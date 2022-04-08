import { useEffect, useRef, useState } from "react";

import {
  Action, H4, Li, Menu, Profile, Ul, UserLogout, UserNameTag,
} from "./styled";

const useClickOutside = (handler) => {
  const domNode = useRef();

  useEffect(() => {
    const isHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", isHandler);

    return () => {
      document.removeEventListener("mousedown", isHandler);
    };
  });
  return domNode;
};

const UserManu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((state) => !state);
  };

  const domNode = useClickOutside(() => {
    setIsOpen(false);
  });

  return (
    <>
      <Action ref={domNode}>
        {/* eslint-disable-next-line no-shadow */}
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

export default UserManu;
