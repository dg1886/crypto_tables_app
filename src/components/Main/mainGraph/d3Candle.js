/* eslint-disable no-underscore-dangle */
import * as d3 from "d3";

import { ValidPeriods } from "../../../api/coinapi";

// Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/candlestick-chart
export default function JapanCandles(data, {
  period,
  setFocusCandle,
  date = (d) => d.date, // given d in data, returns the (temporal) x-value
  open = (d) => d.open, // given d in data, returns a (quantitative) y-value
  close = (d) => d.close, // given d in data, returns a (quantitative) y-value
  high = (d) => d.high, // given d in data, returns a (quantitative) y-value
  low = (d) => d.low, // given d in data, returns a (quantitative) y-value
  marginTop = 20, // top margin, in pixels
  marginRight = 8, // right margin, in pixels
  marginBottom = 40, // bottom margin, in pixels
  marginLeft = 20, // left margin, in pixels
  width = 1050, // outer width, in pixels
  height = 420, // outer height, in pixels
  colors = ["green", "grey", "red"], // [up, no change, down]
} = {}) {
  const yType = d3.scaleLinear; // type of y-scale
  const yRange = [height - marginBottom, marginTop]; // [bottom, top]
  const xFormat = "%b %-d"; // a format specifier for the date on the x-axis
  const yFormat = "~f"; // a format specifier for the value on the y-axis
  const strokeLinecap = "round"; // stroke line cap for the rules

  // Compute values.
  const X = d3.map(data, date);
  const Yo = d3.map(data, open);
  const Yc = d3.map(data, close);
  const Yh = d3.map(data, high);
  const Yl = d3.map(data, low);
  const I = d3.range(X.length);
  const xRange = [10, width - marginLeft - marginRight - 10];
  // calculate for days
  const day = (start, stop, stride) => d3.utcDay.every(stride).range(start, +stop + 1);
  const days = (start, stop) => d3.utcDays(new Date(start), +new Date(stop) + 1);

  // calculate for weeks
  const weeks = (start, stop, stride) => d3.utcMonday.every(stride).range(start, +stop + 1);
  const weekdays = (start, stop) => d3.utcDays(new Date(start), +new Date(stop) + 1)
    .filter((d) => d.getUTCDay() !== 0 && d.getUTCDay() !== 6);

  // calculate for month
  const month = (start, stop, stride) => d3.utcMonth.every(stride).range(start, +stop + 1);
  const monthdays = (start, stop) => d3.utcDays(new Date(start), +new Date(stop) + 1);

  // calculate for years
  const years = (start, stop, stride) => d3.utcYear.every(stride).range(start, +stop + 1);
  const yearsdays = (start, stop) => d3.utcDays(new Date(start), +new Date(stop) + 1);

  const yDomain = [d3.min(Yl) - d3.min(Yl) * 0.2, d3.max(Yh) + d3.max(Yh) * 0.1];
  const minF = () => {
    switch (period) {
      case ValidPeriods.DAY:
        return { generateXDomain: days, generateXTicks: day, stride: 30 };
      case ValidPeriods.WEEK:
        return { generateXDomain: weekdays, generateXTicks: weeks, stride: 3 };
      case ValidPeriods.MONTH:
        return { generateXDomain: monthdays, generateXTicks: month, stride: 1 };
      case ValidPeriods.YEAR:
        return { generateXDomain: yearsdays, generateXTicks: years, stride: 1 };
      default:
        return { generateXDomain: days, generateXTicks: day, stride: 1 };
    }
  };
  const { generateXDomain, generateXTicks, stride } = minF();
  const xDomain = generateXDomain(d3.min(X), d3.max(X));
  const xTicks = generateXTicks(d3.min(xDomain), d3.max(xDomain), stride);

  const xScale = d3.scaleBand().domain(xDomain).range(xRange);
  const yScale = yType(yDomain, yRange);
  const xAxis = d3.axisBottom(xScale).tickFormat(d3.utcFormat(xFormat)).tickValues(xTicks);
  const yAxis = d3.axisLeft(yScale).ticks(height / 40, yFormat).tickFormat(d3.format("~s"));

  // Compute titles.

  const formatDate = d3.utcFormat("%B %-d, %Y");
  const formatValue = d3.format(".2f");
  const formatChange = ((f) => (y0, y1) => f((y1 - y0) / y0))(d3.format("+.2%"));
  const title = (i) => `${formatDate(X[i])}
Open: ${formatValue(Yo[i])}
Close: ${formatValue(Yc[i])} (${formatChange(Yo[i], Yc[i])})
Low: ${formatValue(Yl[i])}
High: ${formatValue(Yh[i])}`;

  const svg = d3.create("svg")
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "width: 100%; height: 100%; ");
  svg.append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(xAxis)
    .call((g) => g.select(".domain").remove())
    .attr("color", colors[1]);

  svg.append("g")
    .attr("transform", `translate(${width + marginRight},0)`)
    .call(yAxis)
    .call((g) => g.select(".domain").remove())
    .call((g) => g.selectAll(".tick line")
      .attr("stroke-opacity", 0)
      .attr("x2", width - marginRight)
      .attr("transform", `translate(${-width - marginLeft},0)`))
    .attr("color", colors[1])
    .attr("font-size", "0.8rem");

  const g = svg.append("g")
    .attr("stroke-linecap", strokeLinecap)
    .selectAll("g")
    .data(I)
    .join("g")
    .attr("transform", (i) => `translate(${xScale(new Date(X[i]))},0)`);

  g.append("line")
    .attr("y1", (i) => yScale(Yl[i]))
    .attr("y2", (i) => yScale(Yh[i]))
    .attr("stroke", (i) => colors[1 + Math.sign(Yo[i] - Yc[i])]);

  g.append("line")
    .attr("y1", (i) => yScale(Yo[i]))
    .attr("y2", (i) => yScale(Yc[i]))
    .on("mouseover", (e) => setFocusCandle(data[e.srcElement.__data__]))
    .on("click", (e) => setFocusCandle(data[e.srcElement.__data__]))
    .attr("stroke-width", 4)
    .attr("stroke", (i) => colors[1 + Math.sign(Yo[i] - Yc[i])]);

  if (title) {
    g.append("title")
      .text(title);
  }

  return svg.node();
}
