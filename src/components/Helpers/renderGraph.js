const renderGraph = ({
  ref, graph, data, options = {},
}) => {
  if (ref.current) {
    if (ref.current?.children[0]) {
      ref.current.removeChild(ref.current.children[0]);
    }
    ref.current.appendChild(graph(data, { ...options }));
  }
};

export default renderGraph;
