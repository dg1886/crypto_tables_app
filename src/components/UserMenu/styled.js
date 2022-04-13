import styled from "styled-components";

export const Action = styled.div`
  position: fixed;
  right: 60px;
`;

export const Profile = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.dark};
  transition: background 0.5s, color 0.5s, box-shadow 0.5s;
  z-index: 100;

  :hover {
    background: rgba(0, 0, 0, 0);
    color: ${({ theme }) => theme.colors.pink};
    box-shadow: inset 0 0 0 3px ${({ theme }) => theme.colors.pink};
  }
`;

export const UserNameTag = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: bold;
  font-style: normal;
  font-size: ${({ theme }) => theme.fontSize.large};
  user-select: none;
`;

export const Menu = styled.div`
  position: absolute;
  top: 75px;
  right: -8px;
  padding: 10px 20px;
  background: darkgray;
  width: 200px;
  border-radius: 15px;
  transition: visibility 0.9s, opacity 0.9s;
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  z-index: 200;

  :before {
    content: "";
    position: absolute;
    top: -5px;
    right: 28px;
    width: 20px;
    height: 20px;
    background: darkgray;;
    transform: rotate(45deg);
  }
`;

export const H4 = styled.h4`
  width: 100%;
  text-align: center;
  font-size: 18px;
  padding: 20px 0;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: 500;
  font-style: normal;
  color: ${({ theme }) => theme.colors.grey};
  letter-spacing: ${({ theme }) => theme.letterSpacing.default};
  line-height: 1.2em;
`;

export const Ul = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Li = styled.li`
  list-style: none;
  padding: 10px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: 500;
  font-style: normal;
  color: ${({ theme }) => theme.colors.dark};
  letter-spacing: ${({ theme }) => theme.letterSpacing.default};
`;

export const UserLogout = styled(Li)`
  cursor: pointer;
  transition: color 0.8s, background 0.8s;

  :hover {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.pink};
  }

  :active {
    background: #555;
  }
`;

export const OutsideBackground = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
`;
