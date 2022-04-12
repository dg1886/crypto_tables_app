import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 30px;
  padding: 0 10px;

  :hover {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.pink};
    transition: 0.8s;
  }

  :active {
    background: ${({ theme }) => theme.colors.dark};
  }
`;

export const Text = styled.span`
  font-family: "Gilroy", sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: ${({ theme }) => theme.letterSpacing.default};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  user-select: none;
`;
