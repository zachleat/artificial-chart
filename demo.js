new ArtificialChartVerticalBar("demographics-jobs-chart", "demographics-jobs-table", {
  showInlineBarValues: "outside",
});

new ArtificialChartHorizontalBar("demographics-jobtitle-chart", "demographics-jobtitle-table", {
  showInlineBarValues: "outside",
  showLegend: false,
  margin: {
    left: 150
  },
  colorMod: 2
});

new ArtificialChartVerticalBar("experience-wentremote-chart", "experience-wentremote-table", {
  showInlineBarValues: "outside",
  colorMod: 2,
  showLegend: false,
});

new ArtificialChartHorizontalBar("demographics-employmentstatus-chart", "demographics-employmentstatus-table", {
  showInlineBarValues: "outside",
  margin: {
    left: 100
  }
});
