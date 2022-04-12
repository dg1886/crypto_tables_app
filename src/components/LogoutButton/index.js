import { LogoutIcon } from "../commonUI/Icons/LogoutIcon";
import { Text, Wrapper } from "./styled";

const LogoutButton = () => {
  return (
    <Wrapper>
      <LogoutIcon padding="0 0 0 15px" />
      <Text margin="0 0 0 17px">Logout</Text>
    </Wrapper>
  );
};

export default LogoutButton;
