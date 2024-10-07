import React from 'react'
import Plot from 'react-plotly.js'

const Distplot =({rating_distplot_data, rating_distplot_layout}) => {
    console.log('Rating Distplot : ', rating_distplot_data)
    console.log('Rating Distplot : ', rating_distplot_layout)
    return (
        <Plot
          data={rating_distplot_data}
          layout={{
            rating_distplot_layout, 
            title:'Rating Histogram: Understanding Customer Feedback',
            width:1260,
            height:500
        }}
        config={{
            editable: false,
            displayModeBar: false,
            edits: false,
            scrollZoom: true,
          }}
        />
    )
}

export default Distplot