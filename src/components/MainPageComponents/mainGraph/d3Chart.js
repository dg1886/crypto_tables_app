import * as d3 from "d3";

export default function BarChart(data, {
  x = (d, i) => i, // given d in data, returns the (ordinal) x-value
  y = (d) => d.close, // given d in data, returns the (quantitative) y-value
  marginRight = 45, // the right margin, in pixels
  width = 1100, // the outer width of the chart, in pixels
  height = 400, // the outer height of the chart, in pixels
  xRange = [0, width - marginRight], // [left, right]
  yType = d3.scaleLinear, // y-scale type
  yRange = [height, 0], // [bottom, top]
  xPadding = 0.1, // amount of x-range to reserve to separate bars
  colors = ["green", "grey", "red"],
} = {}) {
  // Compute values.
  const X = d3.map(data, x);
  const Y = d3.map(data, y);

  // Compute default domains, and unique the x-domain.
  const yDomain = [0, d3.max(Y) * 7]; // [ymin, ymax]
  const xDomain = new d3.InternSet(X); // an array of (ordinal) x-values

  // Omit any data not present in the x-domain.
  const I = d3.range(X.length).filter((i) => xDomain.has(X[i]));

  // Construct scales, axes, and formats.
  const xScale = d3.scaleBand(xDomain, xRange).padding(xPadding);
  const yScale = yType(yDomain, yRange);

  const svg = d3.create("svg")
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "min-width: 100%; max-height: 100%;");

  svg.append("g")

    .selectAll("rect")
    .data(I)
    .join("rect")
    .attr("x", (i) => xScale(X[i]))
    .attr("y", (i) => yScale(Y[i]))
    .attr("height", (i) => yScale(0) - yScale(Y[i]))
    .attr("width", xScale.bandwidth())
    .attr("opacity", 0.5)
    .attr("fill", (i) => colors[1 + Math.sign(data[i].open - data[i].close)]);

  return svg.node();
}
