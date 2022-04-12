// import { baseTheme } from "../../styles/theme";
import lightTheme from "../../assets/images/lightTheme.png";
import DarkThemeIco from "../commonUI/Icons/DarkTheme";
import {
  Checkbox, Label, Span, SwitchButtonWrapper,
} from "./styled";

const SwitchButton = ({ margin }) => {
  return (
    <SwitchButtonWrapper img={lightTheme} margin={margin}>
      <Checkbox type="checkbox" />
      <Label>
        <Span><DarkThemeIco /></Span>
      </Label>
    </SwitchButtonWrapper>
  );
};

export default SwitchButton;
