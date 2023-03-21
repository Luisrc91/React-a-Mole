import { useState } from "react";
import MoleContainer from "./components/MoleContainer";
import "./App.css";

function App() {
  let [score, setScore] = useState(0);

  const createMoleHill = () => {
    let hills = [];
    for (let i = 0; i < 9; i++) {
      hills.push(<MoleContainer key={i} setScore={setScore} score={score} />);
    }

    return <div>{hills}</div>;
  };

  return (
    <body className="body">
      <div className="App">
        <h1>React-a-Mole!</h1>
        <div className="score">{score}</div>
       
        <div className="container">
          {createMoleHill()}
        </div>
      </div>
    </body>
  );
}

export default App;
