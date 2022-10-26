import { ValidPeriods } from "../../../../api/coinapi";
import Typography from "../../../CommonUI/Typography";
import PeriodButton from "./style";

const buttons = [
  {
    text: "1D",
    value: ValidPeriods.DAY,
  },
  {
    text: "1W",
    value: ValidPeriods.WEEK,
  },
  {
    text: "1M",
    value: ValidPeriods.MONTH,
  },
  {
    text: "1Y",
    value: ValidPeriods.YEAR,
  },
];

const Periods = ({
  onChange,
  actibePeriod,
}) => {
  return buttons.map((item) => {
    const isActive = actibePeriod === item.value;

    return (
      <PeriodButton isActive={isActive} key={item.text} onClick={() => onChange(item)}>
        <Typography variant={isActive ? "period_buttonActive" : "period_buttonNoActive"}>{item.text}</Typography>
      </PeriodButton>
    );
  });
};

export default Periods;
