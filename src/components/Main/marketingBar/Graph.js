import { useEffect, useRef } from "react";

import renderGraph from "../../Helpers/renderGraph";
import MarketingGraph from "./marketingGraph";

const Graph = ({ data, color }) => {
  const svgRef = useRef(null);
  useEffect(() => {
    renderGraph({
      ref: svgRef,
      graph: MarketingGraph,
      data,
      options: {
        color,
      },
    });
  }, [data, color]);

  return <div ref={svgRef} />;
};

export default Graph;
