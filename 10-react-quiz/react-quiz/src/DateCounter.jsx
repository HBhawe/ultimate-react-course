import { useReducer, useState } from "react";

function reducer(state, action) {
	if (action.type === "inc") return state + 1;
	if (action.type === "dec") return state - 1;
	if (action.type === "setCount") return action.payload;
}

function DateCounter() {
	// const [count, setCount] = useState(0);

	const [count, dispatch] = useReducer(reducer, 0);

	const [step, setStep] = useState(1);

	// This mutates the date object.
	const date = new Date("june 21 2027");
	date.setDate(date.getDate() + count);

	const dec = () => {
		dispatch({ type: "dec" });
	};

	const inc = () => {
		dispatch({ type: "inc" });
	};

	const defineCount = (e) => {
		// setCount(Number(e.target.value));
		dispatch({ type: "setCount", payload: Number(e.target.value) });
	};

	const defineStep = (e) => {
		setStep(Number(e.target.value));
	};

	const reset = () => {
		// setCount(0);
		setStep(1);
	};

	return (
		<div className="counter">
			<div>
				<input
					type="range"
					min="0"
					max="10"
					value={step}
					onChange={defineStep}
				/>
				<span>{step}</span>
			</div>

			<div>
				<button onClick={dec} type="button">
					-
				</button>
				<input value={count} onChange={defineCount} />
				<button onClick={inc} type="button">
					+
				</button>
			</div>

			<p>{date.toDateString()}</p>

			<div>
				<button onClick={reset} type="reset">
					Reset
				</button>
			</div>
		</div>
	);
}
export default DateCounter;
