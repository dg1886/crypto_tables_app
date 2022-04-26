import { useTheme } from "styled-components";

import LogoutIcon from "../../CommonUI/Icons/LogoutIcon";
import Typography from "../../Typography";
import { LogoutBtnWrapper } from "./styled";

const LogoutButton = () => {
  const { colors } = useTheme();
  return (
    <LogoutBtnWrapper>
      <LogoutIcon fill={colors.textColor} />
      <Typography variant="bold_16px" margin="0 0 0 1.2rem" userSelect="none">
        Logout
      </Typography>
    </LogoutBtnWrapper>
  );
};

export default LogoutButton;
