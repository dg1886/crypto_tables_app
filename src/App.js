import { BtcUsdPeriodOHLC, ValidPeriods } from "./api/coinapi";

function App() {
  console.log(BtcUsdPeriodOHLC(ValidPeriods.MONTH));
  return (
    <div>
      <span>Crypto app</span>
    </div>
  );
}

export default App;
