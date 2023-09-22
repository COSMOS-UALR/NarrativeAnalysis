import React from "react";
import { Line } from "react-chartjs-2";
import {Title, Chart as chartjs} from 'chart.js/auto'
import Chart from 'react-apexcharts'
import { UserData } from "../Data";
import { useState } from "react";

/*function emotionaanalysis({chartData}){
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
export default emotionaanalysis;*/

function Emotionanalysis(){

  const emotions = [
    'Joy',
    'Anger',
    'Disgust',
    'Fear',
    'Sadness',
    'Surprise',
  ];

   // Initialize empty arrays for each emotion's data
   const emotionDatasets = emotions.map((emotion) => ({
    name: emotion,
    data: UserData.map((data) => data[emotion.toLowerCase()]),
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

  const [chartSeries, setChartSeries] = useState(emotionDatasets);

  return (
    <div>
      <h3>Emotion Analysis</h3>
        <div className='col-md-6'>
          <div className='box'>
            <Chart options={chartOptions} series={chartSeries} type='line' width={700} />
          </div>
        </div>
      </div>
    
  );
}

export default Emotionanalysis;