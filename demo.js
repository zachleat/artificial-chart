// Import d3
import "https://d3js.org/d3.v7.min.js";

import { HorizontalBar, VerticalBar } from "./artificial-chart.js";

new VerticalBar("demographics-jobs-chart", "demographics-jobs-table", {
  showInlineBarValues: "outside",
});

new HorizontalBar("demographics-jobtitle-chart", "demographics-jobtitle-table", {
  showInlineBarValues: "outside",
  showLegend: false,
  margin: {
    left: 150
  },
  colorMod: 2
});

new VerticalBar("experience-wentremote-chart", "experience-wentremote-table", {
  showInlineBarValues: "outside",
  colorMod: 2,
  showLegend: false,
});

new HorizontalBar("demographics-employmentstatus-chart", "demographics-employmentstatus-table", {
  showInlineBarValues: "outside",
  margin: {
    left: 100
  }
});
