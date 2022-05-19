import FlexBox from "../CommonUI/FlexBox";
import Logo from "../CommonUI/Icons/Logo";
import NavigationTabs from "../NavigationTabs";
import Typography from "../Typography";
import LogoutButton from "./LogoutButton";
import SwitchButton from "./SwitchButton";

const Navigation = () => {
  return (
    <FlexBox
      width="18.75rem"
      justifyContent="space-between"
      padding="0 0 1rem 1rem"
      flexDirection="column"
      height="100%"
    >
      <div>
        <FlexBox width="100%" height="6rem" justifyContent="space-between">
          <Logo />
          <Typography variant="bold_24px" padding="0 0 0 0.5rem" userSelect="none">CryptoApp</Typography>
        </FlexBox>
        <NavigationTabs />
      </div>

      <FlexBox width="100%" flexDirection="column" alignItems="center">
        <SwitchButton margin="5rem 0 0 0.4rem" />
        <LogoutButton />
      </FlexBox>
    </FlexBox>
  );
};

export default Navigation;
