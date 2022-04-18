import styled from "styled-components";

export const LogoutBtnWrapper = styled.div`
  width: 90%;
  height: 3.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  border-radius: 0.6rem;
  cursor: pointer;
  margin-top: 1.875rem;
  padding: 0 0.6rem;
  transition: color 0.8s, background 0.8s;

  :hover {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.pink};
  }

  :active {
    background: ${({ theme }) => theme.colors.dark};
  }
`;
