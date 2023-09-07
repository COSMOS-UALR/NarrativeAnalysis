import React from "react";
import { Line } from "react-chartjs-2";
import {Title, Chart as chartjs} from 'chart.js/auto'

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
          },*/
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

}
export default Linechart;