import FlexBox from "../CommonUI/FlexBox";
import Logo from "../CommonUI/Icons/Logo";
import Tittle from "../CommonUI/Tittle";
import Navigation from "../Navigation";
import LogoutButton from "./LogoutButton";
import SwitchButton from "./SwitchButton";

const Sidebar = () => {
  return (
    <FlexBox width="18.75rem" justifyContent="space-between" padding="0 0 1rem 1rem" flexDirection="column" height="100%">
      <div>
        <FlexBox width="100%" height="8rem" justifyContent="space-between">
          <Logo />
          <Tittle padding="0 0 0 1rem">Crypto App</Tittle>
        </FlexBox>
        <Navigation />
      </div>

      <FlexBox width="100%" flexDirection="column" alignItems="flex-start" padding="0 1rem">
        <SwitchButton margin="5rem 0 0 0.4rem" />
        <LogoutButton />
      </FlexBox>
    </FlexBox>
  );
};

export default Sidebar;
