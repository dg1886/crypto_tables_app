import { useEffect, useRef } from "react";

import renderGraph from "../../Helpers/renderGraph";
import LineChart from "./LineChart";

const LineChartHandler = ({ data, color }) => {
  const svgRef = useRef(null);
  useEffect(() => {
    renderGraph({
      ref: svgRef,
      graph: LineChart,
      data,
      options: {
        color,
      },
    });
  }, [data, color]);

  return <div ref={svgRef} />;
};

export default LineChartHandler;
