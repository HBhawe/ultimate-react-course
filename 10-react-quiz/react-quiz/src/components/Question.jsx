import Options from "./Options.jsx";
import { useQuiz } from "../contexts/QuizContext.jsx";

function Question() {
	const { questions, index, dispatch, answer } = useQuiz();
	const question = questions.at(index);

	return (
		<div>
			<h4>{question.question}</h4>
			<Options question={question} />
		</div>
	);
}

export default Question;
