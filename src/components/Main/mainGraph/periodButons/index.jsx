import { useContext, useState } from "react";

import BtcUsdPeriodOHLC, { ValidPeriods } from "../../../../api/coinapi";
import { ErrorContext } from "../../../../services/errorContext";
import { prepareDateToGraphs } from "../../../Helpers/prepareDatatoGraphs";
import PeriodButton from "./style";

const buttons = [
  { text: "1D", value: ValidPeriods.DAY },
  { text: "1W", value: ValidPeriods.WEEK },
  { text: "1M", value: ValidPeriods.MONTH },
  { text: "1Y", value: ValidPeriods.YEAR },
];

const Periods = ({ setData, setPeriod }) => {
  const [activeButton, setActiveButton] = useState(ValidPeriods.DAY);

  const { createNatification } = useContext(ErrorContext);

  const handlePeriod = async (item) => {
    try {
      const data = await BtcUsdPeriodOHLC(item.value);
      const prepareDataMainGraph = prepareDateToGraphs(data);
      setData(prepareDataMainGraph);
      setActiveButton(item.value);
      setPeriod(item.value);
    } catch (error) {
      createNatification(error.message);
    }
  };

  return buttons.map((item) => {
    const isActive = activeButton === item.value;

    return (
      <PeriodButton isActive={isActive} key={item.text} onClick={() => handlePeriod(item)}>
        {item.text}
      </PeriodButton>
    );
  });
};

export default Periods;
