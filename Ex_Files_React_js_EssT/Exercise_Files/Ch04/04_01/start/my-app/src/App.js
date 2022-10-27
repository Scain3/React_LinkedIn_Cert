import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

// const [firstCity, second] = ["Tokyo", "Tahoe City", "Atlanta"];
// console.log(firstCity);
// console.log(second);

function App() {
  const [emotion, setEmotion] = useState("happy");

  useEffect(()=>{
    console.log(`It's ${emotion} right now`);
  }, [emotion])

  return (
   <div className="App">
    <h1>Current emotion is {emotion}</h1>
    <button onClick={() => setEmotion("sad")}>Sad</button>
    <button onClick={() => setEmotion("excited")}>Excited</button>
   </div>
  );
}

export default App;
