import styled from "styled-components";

const SButton = styled.div`
  display: flex;
  flex-direction:row;
  justify-content:  "center";
  align-items: "center";
  background-color: ${(props) => (props.backColor ? props.backColor : props.theme.colors.secondary)};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
  box-sizing:  "border-box";
`;

const Button = ({ children }) => {
  <SButton>{children}</SButton>;
};

export default Button;
