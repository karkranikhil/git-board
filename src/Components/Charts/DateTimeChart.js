import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
function DateTimeChart(props) {
  const { data } = props;
  const options = {
    title: {
      text: ""
    },

    height: 260,
    axisX: {
      title: "Date",
        titleFontSize: 16,
      gridThickness: 1
    },
    axisY: {
      title: "Number of deployments",
        titleFontSize: 16
    },
    legend: {
      fontSize: 16
    },
    data: [
      {
        type: "area",
        toolTipContent: "<div>{x}</b><br>{y} times</div>",
        dataPoints: data
      }
    ]
  };
  return (
    <CanvasJSChart
      options={options}
      /* onRef={ref => this.chart = ref} */
    />
  );
}

export default DateTimeChart;
