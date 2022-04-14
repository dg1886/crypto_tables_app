import styled from "styled-components";

import lightTheme from "../../assets/images/lightTheme.png";
import { TextRegular } from "../Text/TextRegular";

export const SwitchButtonWrapper = styled.div`
  background: ${({ theme }) => theme.colors.grey};
  border-radius: 10px;
  overflow: hidden;
  width: 65px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1px;
  position: relative;
  padding-right: 60px;
  box-shadow: rgba(238, 234, 234, 0.02) 0px 1px 3px 0px, rgba(233, 239, 245, 0.15) 0px 0px 0px 1px;
  margin: ${({ margin }) => margin};

  :before {
    content: url(${lightTheme});
    position: absolute;
    top: 2px;
    bottom: 0;
    right: 0;
    width: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    pointer-events: none;

    :checked {
      color: ${({ color, theme }) => color || theme.colors.pink};
    }
  }
`;

export const Checkbox = styled.input`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 2;

  :checked + Label:before {
    transform: translateX(61px);
    transition: transform 300ms linear;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const Label = styled.label`
  position: relative;
  padding: 6px 0;
  display: block;
  user-select: none;
  pointer-events: none;

  :before {
    content: "";
    background: ${({ theme }) => theme.colors.pink};
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 10px;
    transform: translateX(0);
    transition: transform 300ms;
`;

export const Span = styled(TextRegular)`
  position: relative;
`;
