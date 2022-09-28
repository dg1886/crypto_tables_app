import FlexBox from "../CommonUI/FlexBox";
import Logo from "../CommonUI/Icons/Logo";
import Typography from "../CommonUI/Typography";
import ApiKeyGenerator from "./ApiKeyGenerator";
import LogoutButton from "./LogoutButton";
import NavigationTabs from "./NavigationTabs";
import { Container, LogoTabsContainer, LogoWrap } from "./style";
import SwitchButton from "./SwitchButton";

const Navigation = () => {
  return (
    <Container>
      <LogoTabsContainer>

        <LogoWrap>
          <Logo />
          <Typography variant="bold_24px" padding="0 0 0 0.5rem" userSelect="none">CryptoApp</Typography>
        </LogoWrap>

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
