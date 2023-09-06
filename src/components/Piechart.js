import React from "react";
import { Pie } from "react-chartjs-2";
import {Title, Chart as chartjs} from 'chart.js/auto'

function Piechart({chartData}){
    
   
    return <Pie data={chartData}/>;

}
export default Piechart;