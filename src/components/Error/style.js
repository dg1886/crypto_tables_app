import styled from "styled-components";

export const Message = styled.div`
  display: flex;
  align-items: center;
  width: 20rem;
  height: 5rem;
  background-color: ${({ theme }) => (theme.colors.error)};
  padding: 0 0.5rem;
  margin-top: 1rem;
  `;

export const TextWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  `;

const Container = styled.div` 
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index:5;
  top: 0;
  right: 0.5rem;
 `;

export default Container;
