import styled from "styled-components";

export const Wrapper = styled.div`
  width: 180px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 0 15px;
`;
