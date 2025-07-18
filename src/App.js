import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className="counter">
      <div className="range">
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />

        <span>Step: {step}</span>
      </div>

      <div className="btn-con">
        <button onClick={() => setCount((c) => c - step)}>&minus;</button>

        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />

        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from now is `
            : `${Math.abs(count)} days ago was `}
        </span>

        <span>{date.toDateString()}</span>
      </p>

      {count !== 0 || step !== 1 ? (
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleReset();
            }}
            className="reset"
          >
            Reset
          </button>
        </div>
      ) : (
        <div style={{ height: "35px", padding: "10px 20px" }}></div>
      )}
    </div>
  );
}
