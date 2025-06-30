import "./App.css";
import React from "react";

function App() {
  const [step, setStep] = React.useState(1);
  const [counter, setCounter] = React.useState(0);

  function countDate(counter) {
    const todayDate = new Date();
    if (counter > 0) {
      todayDate.setDate(todayDate.getDate() + counter);
      return `${counter} days from today is ${todayDate.toDateString()}`;
    } else if (counter < 0) {
      todayDate.setDate(todayDate.getDate() + counter);
      return `${Math.abs(counter)} days before today was ${todayDate.toDateString()}`;
    } else return `Today is ${todayDate.toDateString()}`;
  }

  function handleReset() {
    setStep(1);
    setCounter(0);
  }

  return (
    <div className="App">
      <div className="step">
        <input
          type={"range"}
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>
      <div className="counter">
        <button onClick={() => setCounter(counter - step)}>-</button>
        <input
          type={"number"}
          onChange={(e) => setCounter(Number(e.target.value))}
          value={counter}
        />
        <button onClick={() => setCounter(counter + step)}>+</button>
      </div>
      <div className="dateCounter">{countDate(counter)}</div>
      {counter !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
