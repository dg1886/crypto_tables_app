import Logo from "../../CommonUI/Icons/Logo";
import Typography from "../../Typography";
import { LogoWrap } from "./style";

const Logotype = () => {
  return (
    <LogoWrap>
      <Logo />
      <Typography variant="bold_24px" padding="0 0 0 0.5rem" userSelect="none">CryptoApp</Typography>
    </LogoWrap>
  );
};
export default Logotype;
