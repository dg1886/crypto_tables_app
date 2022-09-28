/* eslint-disable no-shadow */
/* eslint-disable no-restricted-globals */
import * as d3 from "d3";
// Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/line-chart
export default function MarketingGraph(data, {
  x = (d) => d.date,
  y = (d) => d.close,
  curve = d3.curveMonotoneX, // method of interpolation between points
  width = 150, // outer width, in pixels
  height = 45, // outer height, in pixels
  xRange = [0, width], // [left, right]
  yRange = [30, 15], // [bottom, top]
  color = "white", // stroke color of line
  strokeLinecap = "round", // stroke line cap of the line
  strokeLinejoin = "round", // stroke line join of the line
  strokeWidth = 1, // stroke width of line, in pixels
  strokeOpacity = 1, // stroke opacity of line
} = {}) {
  // Compute values.
  const X = d3.map(data, x);
  const Y = d3.map(data, y);
  const I = d3.range(X.length);
  // Compute default domains.
  const xDomain = [new Date(d3.min(X)), +new Date(d3.max(X))];
  //  // [xmin, xmax]
  // [new Date(d3.min(X)), +new Date(d3.max(X))];

  const yDomain = [d3.min(Y), d3.max(Y)]; // [ymin, ymax]

  // Construct scales and axes.
  const xScale = d3.scaleTime().domain(xDomain).range(xRange);
  const yScale = d3.scaleLinear().domain(yDomain).range(yRange);

  // Construct a line generator.

  const line = d3.line()
    .curve(curve)
    .x((i) => xScale(new Date(X[i])))
    .y((i) => yScale(Y[i]));

  const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "min-width: 90%; height: 100%; height:instrinsic");

  svg.append("path")
    .attr("stroke", color)
    .attr("fill", "none")
    .attr("stroke-width", strokeWidth)
    .attr("stroke-linecap", strokeLinecap)
    .attr("stroke-linejoin", strokeLinejoin)
    .attr("stroke-opacity", strokeOpacity)
    .attr("d", line(I));

  return svg.node();
}
