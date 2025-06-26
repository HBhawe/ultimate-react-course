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

  function resetApp() {
    setStep(1);
    setCounter(0);
  }

  return (
    <div className="App">
      <div className="step">
        <button onClick={() => setStep(step - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep(step + 1)}>+</button>
      </div>
      <div className="counter">
        <button onClick={() => setCounter(counter - step)}>-</button>
        <span>Counter: {counter}</span>
        <button onClick={() => setCounter(counter + step)}>+</button>
      </div>
      <div className="dateCounter">{countDate(counter)}</div>
      <div>
        <button onClick={resetApp}>Reset app</button>
      </div>
    </div>
  );
}

export default App;
