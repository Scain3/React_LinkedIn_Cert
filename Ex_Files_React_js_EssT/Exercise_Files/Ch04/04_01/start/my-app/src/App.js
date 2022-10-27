import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

// const [firstCity, second] = ["Tokyo", "Tahoe City", "Atlanta"];
// console.log(firstCity);
// console.log(second);

function App() {
  const [checked, setChecked] = useState(false);



  return (
   <div className="App">
    <input
      type="checkbox"
      value={checked}
      onChange={() =>
        setChecked((checked) => !checked)
      }
    />
    <label>{checked ? "checked" : "not checked"}</label>
   </div>
  );
}

export default App;
