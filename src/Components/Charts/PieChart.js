import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
function PieChart(props) {
  const { data } = props;
  const options = {
    exportEnabled: true,
    height: 260,
    animationEnabled: true,
    title: {
      text: ""
    },
    legend: {
      fontSize: 16
    },
    data: [
      {
        type: "pie",
        showInLegend: true,
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y} commits",
        legendText: "{label}",
        indexLabelFontSize: 14,
        indexLabel: "{y} commits",
        dataPoints: data
      }
    ]
  };

  return <CanvasJSChart options={options} />;
}

export default PieChart;
