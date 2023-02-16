import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import DogImages from "./components/DogImages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>
        Browse Dog Images{" "}
        <span role="img" aria-label="emoji">
          🐕
        </span>
      </h1>
      <DogImages />
    </div>
  );
}

export default App;
