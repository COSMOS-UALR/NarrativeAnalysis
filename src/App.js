import { useState } from 'react';
import './App.css';
import Linechart from './components/Linechart';
import {UserData} from './Data'
import Piechart from './components/Piechart';
import LineChart from './components/Emotion';

function App() {

  //Data is defined here for all graphs

  const[userData, setUserData]= useState({
    labels: UserData.map((data)=>data.month),
    datasets:[{
      label: "Number of Narratives",
      data:UserData.map((data)=>data.narratives),
      yAxisID:'y',

    },
   {
    label: "Number of Videos",
    data:UserData.map((data)=>data.video_count),
    yAxisID:'y1',
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

    },
    {
      label: "Anger",
      data:UserData.map((data)=>data.anger),
      yAxisID:'y',
    },
    {
      label: "Disgust",
      data:UserData.map((data)=>data.disgust),
      yAxisID:'y',
    },
    {
      label: "Fear",
      data:UserData.map((data)=>data.fear),
      yAxisID:'y',
    },
    {
      label: "Sadness",
      data:UserData.map((data)=>data.sadness),
      yAxisID:'y',
    },
    {
      label: "Surprise",
      data:UserData.map((data)=>data.surprise),
      yAxisID:'y',
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
      <h2>YouTube Data Analysis:South China Dispute </h2>
    <div className="App">
      <div style={{width:600}}>
        <h3>Posting Frequency of Video and Narratives</h3>
      <Linechart chartData={userData}/>
      </div>
      <div style={{width:300}}>
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
      <div style={{textAlign:"center",width:600}}>
      <h3>Emotion Analysis</h3>
      <LineChart chartData={emotionData}/>
      </div>
    </div>
    
    </div>





  );
}
export default App;