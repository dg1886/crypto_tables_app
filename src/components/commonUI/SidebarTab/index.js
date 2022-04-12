import { SidebarText } from "../../Text/SidebarText";
import { Wrapper } from "./styled";

const SidebarTab = ({
  children, text, onClick, checked, margin,
}) => {
  return (
    <Wrapper onClick={onClick} checked={checked}>
      {children}
      <SidebarText margin={margin} checked={checked}>{text}</SidebarText>
    </Wrapper>
  );
};

export default SidebarTab;
