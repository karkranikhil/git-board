import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
function ColumnChart(props) {
  const { data } = props;
  const options = {
    height: 260,
    title: {
      text: ""
    },
    axisY: {
      labelFontSize: 16,
      lineThickness: 0,
    },
    axisX: {
      gridThickness: 0,
      tickLength: 0,
      lineThickness: 0,
      labelFontSize: 16,
    },
    
    animationEnabled: true,
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "column",
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

export default ColumnChart;
