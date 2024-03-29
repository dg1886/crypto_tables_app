import styled from "styled-components";

import FlexBox from "../CommonUI/FlexBox";

export const CloseButton = styled.a`
  float: right !important;
  text-decoration: none !important;
  cursor: pointer;
  font-size: 1rem;
`;

export const ModalContainer = styled.div`
  background: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  max-height: 20vh;
  max-width: 500px;
  padding: 0.8rem;
  width: 100%;
  animation: slide-down 0.2s ease 1;
  box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
  z-index: 400;
  position: absolute;
  top: 5rem;
  left: 32%;
`;

export const ClickOutsideBackground = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
`;

export const TittleWrapper = styled(FlexBox)`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 0 0.3rem 0.6rem 0;
`;
