import { useTheme } from "styled-components";

import { useLogout } from "../../../hooks/useLogout";
import LogoutIcon from "../../CommonUI/Icons/LogoutIcon";
import Typography from "../../CommonUI/Typography";
import { LogoutBtnWrapper } from "./styled";

const LogoutButton = () => {
  const logout = useLogout("/login");
  const { colors } = useTheme();
  return (
    <LogoutBtnWrapper onClick={logout}>
      <LogoutIcon fill={colors.textColor} />
      <Typography variant="bold_16px" margin="0 0 0 1.2rem" userSelect="none">
        Logout
      </Typography>
    </LogoutBtnWrapper>
  );
};

export default LogoutButton;
