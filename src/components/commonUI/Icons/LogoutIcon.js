import styled from "styled-components";

import logout from "../../../assets/images/logout.svg";

const LogoutIcon = styled.img.attrs({
  src: logout,
})`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export default LogoutIcon;
