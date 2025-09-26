function NextButton({ dispatch, answer }) {
	if (answer === null)
		return (
			<button className="btn-disabled" disabled={true}>
				Next
			</button>
		);

	return (
		<button
			className="btn btn-ui"
			onClick={() => dispatch({ type: "nextQuestion" })}
		>
			Next
		</button>
	);
}

export default NextButton;
