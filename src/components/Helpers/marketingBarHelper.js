export const getPercents = (prepareDataHowers) => {
  return ((prepareDataHowers[prepareDataHowers.length - 1].close * 100) / prepareDataHowers[0].open - 100
  ).toFixed(2);
};

export const getVolumeMaket = (response) => {
  return (response.map((i) => i.volume)
    .reduce((acc, cur) => acc + cur)).toFixed(4);
};
