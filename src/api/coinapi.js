import axios from "axios";
import dayjs from "dayjs";

const instance = axios.create({
  baseURL: "https://rest.coinapi.io/v1",
  headers: { "X-CoinAPI-Key": `${process.env.REACT_APP_API_KEY2}` },
});

export const ValidPeriods = {
  YEAR: "1YRS",
  MONTH: "1MTH",
  WEEK: "7DAY",
  DAY: "1DAY",
};

const TimeInPeriods = {
  [ValidPeriods.YEAR]: [10, "year"],
  [ValidPeriods.MONTH]: [12, "month"],
  [ValidPeriods.WEEK]: [52, "week"],
  [ValidPeriods.DAY]: [180, "day"],
};

const BtcUsdPeriodOHLC = async (period) => {
  const time = dayjs().subtract(...(TimeInPeriods[period] || TimeInPeriods[ValidPeriods.DAY])).toISOString();
  const gerRes = await instance.get(
    `/ohlcv/BITSTAMP_SPOT_BTC_USD/history?period_id=${period}&time_start=${time}&limit=500`,
  );
  return gerRes.data;
};

export default BtcUsdPeriodOHLC;
