import { useState,useEffect } from 'react';
import './App.css';
import Linechart from './components/Linechart';
import {UserData} from './Data'
import Piechart from './components/Piechart';
import LineChart from './components/Emotion';

function App() {
  
  // changing document name

  useEffect(() => {
    document.title = 'Narrative Analysis'; 
  }, []);

  //Data is defined here for all graphs

  const[userData, setUserData]= useState({
    labels: UserData.map((data)=>data.month),
    datasets:[{
      label: "Number of Narratives",
      data:UserData.map((data)=>data.narratives),
      yAxisID:'y',
      borderColor: "#62CDFF",
      borderWidth: 3,

    },
],
  });
  const pieData= {
    labels: ['Positive','Negative'],
    datasets:[{
      label: "Count",
      data:[1487,3352],},
    ],
  };
  const[emotionData, setemotionData]= useState({
    labels: UserData.map((data)=>data.month),
    datasets:[{
      label: "Joy",
      data:UserData.map((data)=>data.joy),
      yAxisID:'y',
      borderColor: "#FF5733",
      borderWidth: 3,
      backgroundColor: "#FF5733"

    },
    {
      label: "Anger",
      data:UserData.map((data)=>data.anger),
      yAxisID:'y',
      borderColor: "#E3735E",
      borderWidth: 3,
      backgroundColor: "#E3735E"
    },
    {
      label: "Disgust",
      data:UserData.map((data)=>data.disgust),
      yAxisID:'y',
      borderColor: "#8db051",
      borderWidth: 3,
      backgroundColor: "#8db051"
    },
    {
      label: "Fear",
      data:UserData.map((data)=>data.fear),
      yAxisID:'y',
      borderColor: "#6E260E",
      borderWidth: 3,
      backgroundColor: "#6E260E"
    },
    {
      label: "Sadness",
      data:UserData.map((data)=>data.sadness),
      yAxisID:'y',
      borderColor: "#A9A9A9",
      borderWidth: 3,
      backgroundColor: "#A9A9A9"
    },
    {
      label: "Surprise",
      data:UserData.map((data)=>data.surprise),
      yAxisID:'y',
      borderColor: "#62CDFF",
      borderWidth: 3,
      backgroundColor: "#62CDFF"
    },
  ], 
});
 const[sentiData, setsentiData]= useState({
  labels: UserData.map((data)=>data.month),
  datasets:[{
    label: "Negative",
    data:UserData.map((data)=>data.Negative),
    yAxisID:'y',

  },
 {
  label: "Positive",
  data:UserData.map((data)=>data.Positive),
  yAxisID:'y',
  },
 ],
 });

 //For sentiment graph- which shows linechart upon clicking deeper analysis

 const [showLineChart, setShowLineChart] = useState(false);

  const toggleLineChart = () => {
    setShowLineChart(!showLineChart);
  };
  return (
    <div style={{textAlign:"center"}}> 
      <h2>YouTube Data Analysis:South China Dispute </h2><br/>

      <div style={{textAlign:"center"}}>
      <h3>Narratives Frequency</h3>
      <div className='postingfrequency-chart'>  
      <Linechart chartData={userData}/>
      </div>
      </div><br/>
    <div className="App">
      
      <div style={{width:350}}>
        <h3>Sentiment Analysis</h3>
        <h4
            style={{ textAlign: 'Right', cursor: 'pointer' }}
            onClick={toggleLineChart}
          >
            Deeper Analysis
            </h4>
          {showLineChart ? (
            <LineChart chartData={sentiData}/>
          ) : (
            <Piechart chartData={pieData} />
          )}
      </div>
      <div style={{textAlign:"center",width:800}}>
      <h3>Emotion Analysis</h3>
      <LineChart chartData={emotionData}/>
      </div>
    </div>
    
    </div>
  );
}
export default App;