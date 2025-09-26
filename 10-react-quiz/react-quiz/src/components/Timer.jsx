import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
	let mins = Math.floor(secondsRemaining / 60);
	let secs = secondsRemaining % 60;

	mins = mins < 10 ? `0${mins}` : mins;
	secs = secs < 10 ? `0${secs}` : secs;

	useEffect(() => {
		const id = setInterval(() => {
			dispatch({ type: "tick" });
		}, 1000);

		return () => {
			clearInterval(id);
		};
	}, [dispatch]);
	return (
		<div className="timer">
			{mins}:{secs}
		</div>
	);
}

export default Timer;
