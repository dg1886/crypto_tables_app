import styled from "styled-components";

import logout from "../../../assets/images/logout.svg";

export const LogoutIcon = styled.img.attrs({
  src: logout,
})`
  width: 30px;
  height: 30px;
  cursor: pointer;
  padding: ${({ padding }) => padding};
`;
