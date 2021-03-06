import styled from "styled-components";

const Typography = styled.span`
  ${({ theme, variant }) => theme[variant]};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  user-select: ${({ userSelect }) => userSelect};
  text-transform: ${({ textTransform }) => textTransform};
`;

export default Typography;
