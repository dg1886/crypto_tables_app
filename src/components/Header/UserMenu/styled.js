import styled from "styled-components";

export const Action = styled.div`
  position: relative;
  right: 1.75rem;
`;

export const Profile = styled.div`
  width: 3.75rem;
  height: 3.75rem;
  background-color: ${({ theme }) => theme.colors.textColor};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.background};
  transition: background 0.5s, color 0.5s, box-shadow 0.5s;
  z-index: 100;

  :hover {
    background: rgba(0, 0, 0, 0);
    color: ${({ theme }) => theme.colors.buttonColor};
    box-shadow: inset 0 0 0 3px ${({ theme }) => theme.colors.buttonColor};

    & > span {
      color: ${({ theme }) => theme.colors.buttonColor};
    }
  }
`;

export const Menu = styled.div`
  position: absolute;
  top: 4.688rem;
  right: -0.5rem;
  padding: 0.6rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.userMenuBackground};
  width: 12.5rem;
  border-radius: 1rem;
  transition: visibility 0.9s, opacity 0.9s;
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  z-index: 200;
  text-align: center;

  :before {
    content: "";
    position: absolute;
    top: -0.3rem;
    right: 1.75rem;
    width: 1.25rem;
    height: 1.25rem;
    background: ${({ theme }) => theme.colors.userMenuBackground};
    transform: rotate(45deg);
  }
`;

export const H4 = styled.h4`
  width: 100%;
  text-align: center;
  font-size: 18px;
  padding: 0.2rem 0;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: 500;
  font-style: normal;
  letter-spacing: ${({ theme }) => theme.letterSpacing.default};
  line-height: 1.2em;
`;

export const Ul = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

export const Li = styled.li`
  list-style: none;
  padding: 0.6rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: 500;
  font-style: normal;
  letter-spacing: ${({ theme }) => theme.letterSpacing.default};
`;

export const UserLogout = styled(Li)`
  cursor: pointer;
  transition: color 0.8s, background 0.8s;

  :hover {
    color: ${({ theme }) => theme.colors.textColor};
    background: ${({ theme }) => theme.colors.buttonColor};
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
