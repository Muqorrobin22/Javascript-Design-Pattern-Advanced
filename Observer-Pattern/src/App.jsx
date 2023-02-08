import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Observable from "./pattern/Observable";

function logger(data) {
  console.log(`${Date.now()} ${data}`);
}

function again(data) {
  console.log(`Yuhuu ${data}`);
}

Observable.subscribe(logger);
Observable.subscribe(again);

function App() {
  function handleClick() {
    Observable.notify("This user Has been Clicked");
  }

  function handleToggle() {
    Observable.notify("this user has been Toggled!!!");
  }

  return (
    <div className="App">
      <h1>Observer Pattern</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleToggle} style={{ marginLeft: "12px" }}>
        Toggle Me
      </button>
      <h3>Output in Console</h3>
    </div>
  );
}

export default App;
