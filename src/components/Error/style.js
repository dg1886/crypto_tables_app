import styled from "styled-components";

export const Message = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 5rem;
  max-height: 5rem;
  background-color: ${({ theme }) => (theme.colors.error)};
  padding: 0 0.5rem;
  margin-top: 1rem;
  z-index: 5;
  `;

export const TextWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  `;

export const Container = styled.div` 
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0.5rem;
  height: 49rem;
  width: 20rem;
  overflow: hidden;
 `;
