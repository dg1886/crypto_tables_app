import FlexBox from "../CommonUI/FlexBox";
import NavigationTabs from "../NavigationTabs";
import ApiKeyGenerator from "./ApiKeyGenerator";
import Logotype from "./Logo";
import LogoutButton from "./LogoutButton";
import { Container, LogoTabsContainer } from "./style";
import SwitchButton from "./SwitchButton";

const Navigation = () => {
  return (
    <Container>
      <LogoTabsContainer>
        <Logotype />
        <NavigationTabs />
      </LogoTabsContainer>

      <FlexBox width="100%" flexDirection="column" alignItems="center">
        <ApiKeyGenerator />
        <SwitchButton margin="5rem 0 0 0.4rem" />
        <LogoutButton />
      </FlexBox>
    </Container>
  );
};

export default Navigation;
