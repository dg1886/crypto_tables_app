import styled from "styled-components";

export const GeneratorBtnWrapper = styled.div`
  width: 76%;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 0.6rem;
  cursor: pointer;
  padding: 0 0.6rem;
  transition: color 0.8s, background 0.8s;
  align-self: flex-start;
  margin-left: 0.7rem;
  margin-bottom: 1.875rem;

  :hover {
    color: ${({ theme }) => theme.colors.textColor};
    background: ${({ theme }) => theme.colors.buttonColor};
  }

  :active {
    background: ${({ theme }) => theme.colors.background};
  }
  @media (max-width: 450px) { 
    width: 60%;
    padding: 0 0.5rem;
  }
`;
