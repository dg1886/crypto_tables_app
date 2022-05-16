import * as d3 from "d3";

function LineChart(data, {
  x = (d) => d.date,
  y = (d) => d.close,
  curve = d3.curveMonotoneX, // method of interpolation between points
  marginTop = 40, // top margin, in pixels
  marginRight = -18, // right margin, in pixels
  marginBottom = 15, // bottom margin, in pixels
  marginLeft = -18, // left margin, in pixels
  width = 320, // outer width, in pixels
  height = 115, // outer height, in pixels
  xRange = [marginLeft, width - marginRight], // [left, right]
  yRange = [height - marginBottom, marginTop], // [bottom, top]
  color = {}, // fill color of area
} = {}) {
  // Compute values.
  const X = d3.map(data, x);
  const Y = d3.map(data, y);
  const I = d3.range(X.length);

  const xDomain = [new Date(d3.min(X)), +new Date(d3.max(X))];
  const yDomain = [d3.min(Y), d3.max(Y)]; // [ymin, ymax]

  // Construct scales and axes.
  const xScale = d3.scaleTime().domain(xDomain).range(xRange);
  const yScale = d3.scaleLinear().domain(yDomain).range(yRange);

  // Construct an area generator.
  const line = d3.area()
    .curve(curve)
    .x((i) => xScale(new Date(X[i])))
    .y0(yScale(0))
    .y1((i) => yScale(Y[i]));

  const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "min-width: 100%; width: 260px; min-height: 100%;");

  const gradient = svg.append("linearGradient")
    .attr("id", "svgGradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "0%")
    .attr("y2", "100%")
    .attr("fill", color);
  gradient.append("stop")
    .attr("class", "start")
    .attr("offset", "0%")
    .attr("stop-color", color)
    .attr("stop-opacity", 0.5);
  gradient.append("stop")
    .attr("class", "end")
    .attr("offset", "60%")
    .attr("stop-color", color)
    .attr("stop-opacity", 0);

  svg.append("path")
    .attr("fill", "url(#svgGradient)")
    .attr("stroke", color)
    .attr("stroke-width", 3)
    .attr("d", line(I));

  return svg.node();
}

export default LineChart;
