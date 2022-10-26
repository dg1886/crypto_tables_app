import { atom } from "recoil";

import { BtcUsdOHLCRequest, ValidPeriods } from "../../api/coinapi";
import { getPercents, getVolumeMaket } from "../../components/Helpers/marketingBarHelper";
import { prepareDateToGraphs } from "../../components/Helpers/prepareDatatoGraphs";
import { MOC } from "../../mocData/moc";

export const lineChartState = atom({
  key: "lineChartState",
  default: [],
  effects: [
    async ({
      onSet,
      setSelf,
    }) => {
      await onSet(({
        apiKey,
        createNotification,
      }) => {
        const fetchData = async () => {
          try {
            const response = await BtcUsdOHLCRequest(ValidPeriods.MONTH, apiKey);
            setSelf(prepareDateToGraphs(response));
          } catch (error) {
            createNotification(error.message);
            setSelf(prepareDateToGraphs(MOC.lineChartGraph));
          }
        };
        fetchData();
      });
    },
  ],
});

export const transactionState = atom({
  key: "transactionState",
  default: [],
  effects: [
    async ({
      onSet,
      setSelf,
    }) => {
      await onSet(({
        apiKey,
        createNotification,
      }) => {
        const fetchData = async () => {
          try {
            const response = await BtcUsdOHLCRequest(ValidPeriods.MONTH, apiKey);
            setSelf(prepareDateToGraphs(response));
          } catch (error) {
            createNotification(error.message);
            setSelf(prepareDateToGraphs(MOC.transactionGraph));
          }
        };
        fetchData();
      });
    },
  ],
});

export const marketingState = atom({
  key: "marketingState",
  default: {},
  effects: [
    async ({
      onSet,
      setSelf,
    }) => {
      await onSet(({
        apiKey,
        createNotification,
      }) => {
        const fetchData = async () => {
          try {
            const marketingGraph = await BtcUsdOHLCRequest(ValidPeriods.HOUR24, apiKey);
            const marketingNumbers = await BtcUsdOHLCRequest(ValidPeriods.DAYS7, apiKey);

            const prepareDataHowers = await prepareDateToGraphs(marketingGraph);
            const prepareDataWeek = await prepareDateToGraphs(marketingNumbers);

            setSelf({
              hours24Data: prepareDataHowers,
              weekData: prepareDataWeek,
              percent24Hour: getPercents(prepareDataWeek),
              percent7Days: getPercents(prepareDataWeek),
              volume24: getVolumeMaket(prepareDataHowers),
              marketCap: getVolumeMaket(prepareDataHowers),
              price: prepareDataHowers[0].open,
            });
          } catch (error) {
            createNotification(error.message);
            setSelf({
              hours24Data: prepareDateToGraphs(MOC.marketingGraph),
              weekData: prepareDateToGraphs(MOC.marketingNumbers),
              percent24Hour: getPercents(prepareDateToGraphs(MOC.marketingNumbers)),
              percent7Days: getPercents(prepareDateToGraphs(MOC.marketingNumbers)),
              volume24: getVolumeMaket(prepareDateToGraphs(MOC.marketingGraph)),
              marketCap: getVolumeMaket(prepareDateToGraphs(MOC.marketingGraph)),
              price: prepareDateToGraphs(MOC.marketingGraph)[0].open,
            });
          }
        };
        fetchData();
      });
    },
  ],
});

export const mainGraphState = atom({
  key: "mainGraphState",
  default: [],
  effects: [
    async ({
      onSet,
      setSelf,
    }) => {
      await onSet(({
        apiKey,
        createNotification,
        period = ValidPeriods.DAY,
      }) => {
        const fetchData = async () => {
          try {
            const response = await BtcUsdOHLCRequest(period, apiKey);
            setSelf(prepareDateToGraphs(response));
          } catch (error) {
            createNotification(error.message);
            setSelf(prepareDateToGraphs(MOC.mainGraph));
          }
        };
        fetchData();
      });
    },
  ],
});
