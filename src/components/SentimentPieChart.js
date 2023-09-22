import React from "react";
import Chart from 'react-apexcharts'

function Piechart(){
    const pieData = {
        labels: ['Positive', 'Negative'],
        series: [1487, 3352],
      };
      
      const options = {
        labels: pieData.labels,
        colors: ['#67B7DC', '#FF5733'], // You can customize the colors here
        legend: {
          show: true,
          position: 'top', // You can change the position of the legend
        },
      };
   
 return(
         <div>
            <h3><a href="/NarrativeAnalysis/analysis/sentiment">Sentiment Analysis</a></h3>
            <div className='col-md-6'>
            <div className='box'>
             <Chart options={options} series={pieData.series} type="pie" width={550} />
             </div>
             </div>
         </div>
 
 )
}
export default Piechart;