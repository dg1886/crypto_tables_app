import dayjs from "dayjs";

export const prepareDateToMainGraph = (data) => data.map(({
  price_close, price_high, price_low, price_open, time_period_start, volume_traded,
}) => ({
  date: dayjs(time_period_start).toISOString(),
  open: price_open,
  high: price_high,
  low: price_low,
  close: price_close,
  volume: volume_traded,
}));
