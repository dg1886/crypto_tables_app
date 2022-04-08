import { useTheme } from "styled-components";

import FlexBox from "../commonUI/FlexBox";
import Logo from "../commonUI/Icons/Logo";
import { Title } from "../Text/Title";
import UserMenu from "../UserMenu";

const Header = () => {
  const { colors } = useTheme();

  return (
    <FlexBox
      width="100%"
      height="100px"
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
      bgColor={colors.dark}
      padding="0 30px"
      zIndex="2"
    >
      <FlexBox
        width="350px"
        height="100%"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-evenly"
        bgColor={colors.dark}
      >
        <Logo />
        <Title>Crypto Tables</Title>
      </FlexBox>

      <FlexBox padding="0 0 0 30%">
        <input type="text" /> {/* заглушка т.к. будет переиспользован кастомный инпут Сережи */}
      </FlexBox>
      <UserMenu />
    </FlexBox>
  );
};

export default Header;
