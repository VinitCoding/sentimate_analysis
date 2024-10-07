import React from "react";
import Plot from "react-plotly.js";

const HorizontalBarChart = ({h_bar}) => {
  return (
    <div className="">
      <Plot
        data={[
          {
            x: h_bar.x,
            y: h_bar.y,
            type: "bar",
            orientation: 'h',
            marker: { color: "#699fcb" },
          }
        ]}
        layout={{
            xaxis: {title: 'Counts'},
            yaxis: {title: '', tickfont:{size:12}, automargin:true},
            height: 400,
            width: 625
        }}
        config={{
          displayModeBar: false,
          editable: false,
          edits: false,
          scrollZoom:true

        }}
        

        style={{width: '100%', height: '100%', cursor: 'pointer' }}
        
      />
    </div>
  );
};

export default HorizontalBarChart;
