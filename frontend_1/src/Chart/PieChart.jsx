import React from 'react'
import Plot from 'react-plotly.js'

const PieChart = ({sentiment_counts, sentiment_titles, sentiment_colors}) => {
  return (
    <div>
        <Plot 
        data={[{
            values: sentiment_counts,
            labels: sentiment_titles,
            marker: {
              colors: sentiment_colors
            },
            type: 'pie' 
        }]}
        layout={{

            height: 400,
            width: 500,
            title: 'Overall Sentiment Distribution'
        }}
        config={{
            displayModeBar: false,
            editable: false,
            edits: false
        }}

        style={{height: '', width: '10%'}}
        />
    </div>
  )
}

export default PieChart