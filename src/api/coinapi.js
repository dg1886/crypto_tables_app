import axios from "axios";
import dayjs from "dayjs";

const instance = axios.create({
  baseURL: "https://rest.coinapi.io/v1",
  headers: { "X-CoinAPI-Key": `${process.env.REACT_APP_API_KEY1}` },
});

export const ValidPeriods = {
  YEAR: "1YRS",
  MONTH: "1MTH",
  WEEK: "7DAY",
  DAY: "1HRS",
};

const TimeInPeriods = {
  [ValidPeriods.YEAR]: [10, "year"],
  [ValidPeriods.MONTH]: [24, "month"],
  [ValidPeriods.WEEK]: [53, "week"],
  [ValidPeriods.DAY]: [30, "day"],
};

const BtcUsdPeriodOHLC = async (period) => {
  const time = dayjs().substract(...(TimeInPeriods[period] || TimeInPeriods[ValidPeriods.DAY])).toISOString();
  const gerRes = await instance.get(`/ohlcv/BITSTAMP_SPOT_BTC_USD/history?period_id=${period}&time_start=${time}`);
  return gerRes.data;
};

export default BtcUsdPeriodOHLC;
