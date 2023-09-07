import React from "react";
import { Line } from "react-chartjs-2";
import {Title, Chart as chartjs} from 'chart.js/auto'

function emotionaanalysis({chartData}){
    const options = {
        scales: {
            x: {
                display: true, // Display the X axis
                grid: {
                  display: false, // Hide the X axis gridlines
                },
                ticks: {
                  font: {
                    size: 13,       
                    family: 'sans-serif', 
                  },
                },
              },
          y: {
            position: 'left', // Position the first Y axis on the left side
            grid: {
                display: false, // Hide the Y axis gridlines
              },
            title: {
              display: true,
              //text: 'Emotion Proportion',
            },
            ticks: {
              font: {
                size: 13,       
                family: 'sans-serif', 
              },
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position:'right'
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
export default emotionaanalysis;