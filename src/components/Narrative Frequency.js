import React from "react";
import { Line } from "react-chartjs-2";
import {Title, Chart as chartjs} from 'chart.js/auto'
import Chart from 'react-apexcharts'
import { UserData } from "../Data";
import { useState,useEffect } from 'react';

/* commented code for chartjs
function Linechart({chartData}){
    const options = {
        scales: {
            x: {
                display: true, 
                grid: {
                  display: false, 
                },
                ticks: {
                  font: {
                    size: 13,       
                    family: 'sans-serif', 
                  },
                },
              },
          y: {
            position: 'left', 
            grid: { 
                display: false, 
              },
            title: {
              display: true,
              text: 'Number of Narratives',
              font:{
                size:20,
                weight: 'bold',
                family: 'sans-serif',
              }
              
            },
            ticks: {
              font: {
                size: 13,       
                family: 'sans-serif', 
              },
            },
          },
         /*y1: {
            position: 'right', // Position the second Y axis on the right side
            grid: {
                display: false, // Hide the Y axis gridlines
              },
            title: {
              display: true,
              text: 'Number of Videos',
            },
          },
        },
        plugins: {
          legend: {
            display: false,
           },
        },
        
        elements: {
          point: {
            radius: 1,        
            pointStyle: 'circle' 
          },
        },
        
      };
   
    return <Line data={chartData} options={options}/>;

}*/

// apex charts from here

function Linechart(){

  const [chartOptions, setChartOptions] = useState({
    xaxis: {
      categories: UserData.map((data) => data.month),
    },
    yaxis: {
        title: {
          text: 'Number of Narratives',
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

  const [chartSeries, setChartSeries] = useState([
    {
      name: 'Number of Narratives',
      data: UserData.map((data) => data.narratives),
    },
  ]);
return(
<div>
<h3 style={{textAlign:"center"}}>Narratives Frequency</h3><br/>
<div className='postingfrequency-chart'>
    <div class="col-md-6"> 
    <div class="box">
   <Chart options={chartOptions} series={chartSeries} type='line' width={900}/>

   </div>
     </div>
     </div>
   </div>
);


}
export default Linechart;