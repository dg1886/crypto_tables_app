import { LogoutIcon } from "../../CommonUI/Icons/LogoutIcon";
import { TextRegular } from "../../Text/TextRegular";
import { LogoutBtnWrapper } from "./styled";

const LogoutButton = () => {
  return (
    <LogoutBtnWrapper>
      <LogoutIcon />
      <TextRegular userSelect="none" margin="0 0 0 1rem">
        Logout
      </TextRegular>
    </LogoutBtnWrapper>
  );
};

export default LogoutButton;
