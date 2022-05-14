import dayjs from "dayjs";

export const prepareLineChartDataHelper = (data) => data.map(({
  price_close,
  time_period_start,
}) => ({
  date: dayjs(time_period_start).toISOString(),
  close: price_close,
}));
