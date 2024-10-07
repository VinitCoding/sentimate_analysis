import React from "react";
import Plot from "react-plotly.js";

const Histogram = ({ rating_x, rating_title, rating_x_axis, ratings_median_x, rating_height, rating_width}) => {
  return (
    <div className="">
      <Plot
        data={[
          {
            x: rating_x,
            type: "histogram",
            autobinx:false,
            xbins: {
              end : 5.01,
              start : 0.0,
              size : 0.1,
            },
            marker: {
              // color: histogram_colors,
               line: {
                color:  "black", 
                width: 2
              } 
            } ,
          },
          // {
          //   x: rating_x, 
          //   type:'line'
          // }
        ]}
        layout={{
          
          size:750,
          // annotations: [
          //   {
          //     x: ratings_median_x,
          //     y: 0,
          //     xref: "x",
          //     yref: "y",
          //     text: "Median Value",
          //     font: {
          //       color: 'black',
          //       size: 13,
          //     },
          //     showarrow: true,
          //     arrowhead: 7,
          //     ax: 0,
          //     ay: -40,
          //   },
          // ],
          title: rating_title,
          showlegend: false,
          xaxis: { title: rating_x_axis },
          width:rating_width,
          height:rating_height
        }}
        config={{
          editable: false,
          displayModeBar: false,
          edits: false,
          scrollZoom: true,
        }}
      />
    </div>
  );
};

export default Histogram;