import { Link } from "react-router-dom";
import styled from "styled-components";

export const SLink = styled(Link)`
  text-decoration: none;
`;

export const LinkContent = styled.span`
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: ${({ theme }) => theme.letterSpacing.default};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  border-bottom: 2px solid #ffffffb5;
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;

const StyledLink = ({
  href, content, padding, margin,
}) => {
  return (
    <SLink to={href}>
      <LinkContent margin={margin} padding={padding}>{content}</LinkContent>
    </SLink>
  );
};

export default StyledLink;
