# artificial-chart

The SVG D3.js based charting solution used for the Jamstack Community Survey.

## [Demo](https://zachleat.github.io/artificial-chart/demo.html)

All of the charts are viewable on https://jamstack.org/survey/2021/

## Features

* Responsive Web Design friendly charts
* Progressive-enhancement friendly, draws data from HTML tables. Warning: does not include a No-JS visual view.
* Horizontal and vertical bar chart type
  * Supports grouped data visualized side by side or stacked.
  * Supports proportional data (scaling to 100%)
  * Option to show inline labels inside or outside of the bars.
* Bubble chart type
* Styles nicely with gradients
* Customizable margins
* Wrapping on axis labels
* Supports customized label precision
* Supports auto-generated HTML legends (outside of the SVG).
* Uses IntersectionObserver and ResizeObserver (when available) for better performance on initialization and resize.

## Changelog

* `v2.0.0` swap to ESM

## Usage

```js
import "https://d3js.org/d3.v7.min.js";

import { HorizontalBar, VerticalBar, Bubble } from "./artificial-chart.js";

new VerticalBar("chart-id", "source-table-id", {
  showInlineBarValues: "outside",
});
```