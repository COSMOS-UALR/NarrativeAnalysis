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
          },
        },
      };
   
    return <Line data={chartData} options={options}/>;

}
export default emotionaanalysis;