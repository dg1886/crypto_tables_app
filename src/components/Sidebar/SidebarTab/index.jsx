import { SidebarText } from "../../Text/SidebarText";
import { SidebarTabWrapper } from "./styled";

const SidebarTab = ({
  children, text, onClick, checked, margin,
}) => {
  return (
    <SidebarTabWrapper onClick={onClick} checked={checked}>
      {children}
      <SidebarText margin={margin} checked={checked}>{text}</SidebarText>
    </SidebarTabWrapper>
  );
};

export default SidebarTab;
