import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

// const [firstCity, second] = ["Tokyo", "Tahoe City", "Atlanta"];
// console.log(firstCity);
// console.log(second);

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(()=>{
    console.log(`It's ${emotion} right now`);
  }, [emotion, secondary])

  useEffect(() => {
    console.log(`It's ${secondary} around here!`);
  }, [secondary])

  return (
   <div className="App">
    <h1>Current emotion is {emotion}</h1>
    <button onClick={() => setEmotion("sad")}>Sad</button>
    <button onClick={() => setEmotion("excited")}>Excited</button>
    <h2>Current seconday emotion is {secondary}.</h2>
    <button onClick={()=> setSecondary("grateful")}>Grateful</button>
   </div>
  );
}

export default App;
