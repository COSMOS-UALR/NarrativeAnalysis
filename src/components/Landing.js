import React from "react";
import { useState,useEffect } from 'react';
import Linechart from "./Narrative Frequency";
import { UserData } from "../Data";
import Chart from 'react-apexcharts'
import Piechart from "./SentimentPieChart";
import Emotionanalysis from "./Emotion";


 function Home(){
    
    return(
        <div>
        <h1 style={{textAlign:"center"}}>YouTube Data Analysis: South China Dispute</h1>
          <Linechart/><br/>
          <div className="App">
          <Piechart/>
          <Emotionanalysis/>
          </div>
          </div>
    );

    
 }

 export default Home;