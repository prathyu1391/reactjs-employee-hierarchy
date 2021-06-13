import React from "react";
import "./styles.css";
import Chart from "./chart";
//import data from "./data.json";


export default function App() {
  return (
    <div className="App">
      <div className="header">
        React Employee Hierarchy Chart
        <Chart/>
      </div>
    </div>
  );
}
