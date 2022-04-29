import styled from "styled-components";

const Button = styled.button`
  position: relative;
  color: ${({ theme }) => theme.colors.textColor};
  background-color: ${({ theme, disabled }) => (
    disabled ? theme.colors.sideBarIconsNoActive : "transparent"
  )};
  width: ${({ width }) => width || "15.625rem"};
  height: ${({ height }) => height || "3.125rem"};
  margin: ${({ margin }) => margin || "0.938rem 0"};
  padding: ${({ padding }) => padding || 0};
  border: none;
  font-size: ${({ theme }) => theme.fontSize.normal};
  overflow: hidden;
  z-index: 1;
  cursor: pointer;

  ::before {
    display: block;
    position: absolute;
    background-color: ${({ theme, disabled }) => (
    disabled ? theme.colors.sideBarIconsNoActive : theme.colors.buttonColor
  )};
    width: 100%;
    height: 100%;
    content: "";
    z-index: -1;
    top: 0;
    border-radius: 0.313rem;
  }

  :hover {
    ::before {
      background-color: ${({ theme, disabled }) => (
    disabled ? theme.colors.sideBarIconsNoActive : theme.colors.hoverButton
  )};
    }
  }

  :active {
    ::before {
      transform: scale(0.97);
    }
  }
`;

export default Button;
