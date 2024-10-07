import { layouts } from "chart.js";
import React from "react";
import Plot from "react-plotly.js";

const StackedBarChart = ({plotly_data}) => {
  return (
    <div className="">
      <Plot
      // data = {plotly_data}
        data={[
          {
            x: plotly_data.x,
            y: plotly_data.neg_y,
            name: "Negative",
            type: "bar",
            marker: { color: "#ff0000" },
            // text: ["18%", "22%", "15%"],
            textposition: "auto",
          },
          {
            x: plotly_data.x,
            y: plotly_data.neu_y,
            name: "Neutral",
            type: "bar",
            marker: { color: "#ffd700" },
            // text: ["18%", "22%", "15%"],
            textposition: "auto",
          },
          {
            x: plotly_data.x,
            y: plotly_data.pos_y,
            name: "Positive",
            type: "bar",
            marker: { color: "#90ee90" },
            // text: ["18%", "22%", "15%"],
            textposition: "auto",
            
          }
        ]}
        layout={{
            title: 'Analysis of Product Reviews',
            barmode: 'stack',
            xaxis: {title: {text: 'Aspects', standoff: 30}, tickfont:{size:10}, tickangle:30, autotick: false, automargin: true},
            yaxis: {title: 'Counts'},
            height: 400,
            width: 750,
            
        }}
        config={{
          displayModeBar: false,
          editable: false,
          edits: false,
          scrollZoom:true,

        }}
        

        style={{width: '100%', height: '100%', cursor: 'pointer'}}
        
      />
    </div>
  );
};

export default StackedBarChart;
