import React from 'react'
import Plot from 'react-plotly.js'

const BubbleChart = ({bubble_x, bubble_y, bubble_size, bubble_title, bubble_x_axis, bubble_y_axis, bubble_height, bubble_width, bubble_tick_size, bubble_text, color}) => {
    console.log('bubble_x : ', bubble_x)
    console.log('bubble_y : ', bubble_y)
    console.log('bubble_size : ', bubble_size)
    console.log('bubble_title : ', bubble_title)
    console.log('Buuble Size: ', bubble_size);
    
  return (
    <div>
        <Plot 
        data={[
            {
                x: bubble_x,
                y: bubble_y,
                mode: 'markers',
                marker : {
                    size: bubble_size,
                    color: color
                },
                text: bubble_text,
                
            }
        ]}
        layout={{
            title: bubble_title,
            showlegend: false,
            xaxis: {title: bubble_x_axis},
            yaxis: {title: bubble_y_axis, tickfont:{size:bubble_tick_size}, automargin:true},
            height: bubble_height,
            width: bubble_width,
        }}
        config={{
            editable: false,
            displayModeBar: false,
            edits: false,
            scrollZoom:true,
        }}
        />
    </div>
  )
}

export default BubbleChart