import React from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
function BarChart(props) {
  const { data } = props;
  data.sort(function(a, b) {
    return b.y - a.y;
  });
  const options = {
    exportEnabled: true,
    height: 260,
    animationEnabled: true,
    title: {
      text: ""
    },
    axisY: {
      title: "Number of lines",
      labelFontSize: 16
    },
    axisX: {
      labelFontSize: 16,
      interval: 1
    },

    data: [
      {
        type: "bar",
        toolTipContent: "<div>{label}</b><br>{y} lines of code</div>",
        dataPoints: data.reverse()
      }
    ]
  };

  return <CanvasJSChart options={options} />;
}

export default BarChart;
