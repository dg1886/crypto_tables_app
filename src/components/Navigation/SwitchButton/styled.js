import styled from "styled-components";

import { DARK } from "../../../constants/themeConstants";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  background: ${({ theme }) => theme.colors.backgroundItems};
  border-radius: 0.625rem;
  width: 8rem;
  height: 2.5rem;
  text-align: center;
  box-shadow: rgba(238, 234, 234, 0.02) 0px 1px 3px 0px, rgba(233, 239, 245, 0.15) 0px 0px 0px 1px;
`;

export const Option = styled.div`
  width: 4rem;
  height: 2.5rem;
  display: grid;
  place-items: center; 
  z-index: 10;
  cursor: pointer;
`;

export const Switcher = styled.div`
  position: absolute;
  width: 4rem;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.colors.buttonColor};
  border-radius: 0.625rem;
  z-index: 5;
  transform: translateX(${({ chosenTheme }) => (chosenTheme === DARK ? "0" : "4rem")});
  transition: transform 0.3s;
`;
