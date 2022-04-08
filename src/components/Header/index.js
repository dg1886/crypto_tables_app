import { baseTheme } from "../../styles/theme";
import FlexBox from "../commonUI/FlexBox";
import Logo from "../commonUI/Icons/Logo";
import { Title } from "../Text/Title";
import UserManu from "../UserManu";

const Header = () => {
  return (
    <FlexBox
      width="100%"
      height="100px"
      flexDirection="row"
      justifyContent="space-around"
      alignItems="center"
      backColor={baseTheme.colors.dark}
      zIndex="2"
    >
      <FlexBox
        width="350px"
        height="100%"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-evenly"
        backColor={baseTheme.colors.dark}
      >
        <Logo />
        <Title>Crypto Tables</Title>
      </FlexBox>

      <input type="text" /> {/* заглушка т.к. будет переиспользован кастомный инпут Сережи */}
      <UserManu />
    </FlexBox>
  );
};

export default Header;
