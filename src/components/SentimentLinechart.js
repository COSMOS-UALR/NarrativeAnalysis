import { useState } from 'react';
import React from 'react'
import Chart from 'react-apexcharts'
import { UserData } from "../Data";

function SentimentLinechart() {

    const sentiments = [
        'Negative',
        'Positive',
      ];
    
       // Initialize empty arrays for each emotion's data
       const sentimentDatasets = sentiments.map((sentiment) => ({
        name: sentiment,
        data: UserData.map((data) => data[sentiment.toLowerCase()]),
      }));
    
      const [chartOptions, setChartOptions] = useState({
        xaxis: {
          categories: UserData.map((data) => data.month),
        },
        yaxis: {
          title: {
            
            style: {
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#333',
            },
          },
          labels: {
            show: true,
            rotate: 0,
            rotateAlways: false,
            style: {
              fontSize: '12px',
              fontWeight: 'normal',
              color: '#555',
            },
          },
        },
        grid: {
          show: false,
        },
      });
    
      const [chartSeries, setChartSeries] = useState(sentimentDatasets);
    
  return (
    <div>
      <h1 style={{textAlign:"center"}}>YouTube Data Analysis: South China Dispute</h1>
      <h3 style={{textAlign:"center"}}>Narrative Sentiments</h3><br/>
      <div className='postingfrequency-chart'>
    <div class="col-md-6"> 
    <div class="box">
   <Chart options={chartOptions} series={chartSeries} type='line' width={900}/>

   </div>
     </div>
     </div>
   </div>
    
  )
}

export default SentimentLinechart;
