import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button
              backgroundColor="#7950f2"
              textColour="#fff"
              onClick={handlePrevious}
            >
              <span>⬅️</span> Previous
            </Button>
            <Button
              backgroundColor="#7950f2"
              textColour="#fff"
              onClick={handleNext}
            >
              Next <span>➡️</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

// new step messages component with children prop
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step} </h3>
      {children}
    </div>
  );
}

// reusable button component with the children prop
function Button({ textColour, backgroundColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: backgroundColor, color: textColour }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
