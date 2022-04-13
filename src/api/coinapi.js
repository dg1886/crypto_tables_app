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

export const BtcUsdPeriodOHLC = async (period) => {
  let time = "";
  switch (period) {
    case ValidPeriods.YEAR:
      time = dayjs().subtract(10, "year").toISOString();
      break;
    case ValidPeriods.MONTH:
      time = dayjs().subtract(24, "month").toISOString();
      break;
    case ValidPeriods.WEEK:
      time = dayjs().subtract(53, "week").toISOString();
      break;
    case ValidPeriods.DAY:
      time = dayjs().subtract(30, "day").toISOString();
      break;

    default:
      time = dayjs().subtract(30, "day").toISOString();
      break;
  }
  const gerRes = await instance.get(`/ohlcv/BITSTAMP_SPOT_BTC_USD/history?period_id=${period}&time_start=${time}`);
  return gerRes.data;
};
