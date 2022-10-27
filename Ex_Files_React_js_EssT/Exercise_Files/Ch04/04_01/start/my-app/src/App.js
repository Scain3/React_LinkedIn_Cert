import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useReducer } from "react";

// const [firstCity, second] = ["Tokyo", "Tahoe City", "Atlanta"];
// console.log(firstCity);
// console.log(second);

function App() {
  const [checked, setChecked] = useReducer(checked => !checked, false);



  return (
   <div className="App">
    <input
      type="checkbox"
      value={checked}
      onChange={setChecked}
    />
    <label>{checked ? "checked" : "not checked"}</label>
   </div>
  );
}

export default App;
