import { LogoutIcon } from "../commonUI/Icons/LogoutIcon";
import { LogoutBtnWrapper, Text } from "./styled";

const LogoutButton = () => {
  return (
    <LogoutBtnWrapper>
      <LogoutIcon padding="0 0 0 15px" />
      <Text margin="0 0 0 17px">Logout</Text>
    </LogoutBtnWrapper>
  );
};

export default LogoutButton;
