function LineChartArrows() {
  const css = ".up { fill: #ae5467;} .down { fill: #29a5e9;}";

  return (
    <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>{css}</style>
      </defs>
      <g id="a" />
      <g id="b">
        <polygon className="up" points="8 14 16 14 12 19 8 14" />
        <polygon className="down" points="16 10 8 10 12 5 16 10" />
      </g>
    </svg>
  );
}

export default LineChartArrows;
