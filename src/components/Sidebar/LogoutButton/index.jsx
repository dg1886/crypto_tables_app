import { useTheme } from "styled-components";

import LogoutIcon from "../../CommonUI/Icons/LogoutIcon";
import { TextRegular } from "../../Text/TextRegular";
import { LogoutBtnWrapper } from "./styled";

const LogoutButton = () => {
  const { colors } = useTheme();
  return (
    <LogoutBtnWrapper>
      <LogoutIcon fill={colors.textColor} />
      <TextRegular userSelect="none" margin="0 0 0 1rem">
        Logout
      </TextRegular>
    </LogoutBtnWrapper>
  );
};

export default LogoutButton;
