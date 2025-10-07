import { useQuiz } from "../contexts/QuizContext.jsx";
import ErrorMessage from "./ErrorMessage.jsx";
import FinishScreen from "./FinishScreen.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Loader from "./Loader.jsx";
import MainContent from "./MainContent.jsx";
import NextButton from "./NextButton.jsx";
import Progress from "./Progress.jsx";
import Question from "./Question.jsx";
import StartScreen from "./StartScreen.jsx";
import Timer from "./Timer.jsx";

function App() {
	const { status } = useQuiz();

	return (
		<div className="app">
			<Header />
			<MainContent>
				{status === "loading" && <Loader />}
				{status === "error" && <ErrorMessage />}
				{status === "ready" && <StartScreen />}
				{status === "active" && (
					<>
						<Progress />
						<Question />
						<Footer>
							<Timer />
							<NextButton />
						</Footer>
					</>
				)}
				{status === "finished" && <FinishScreen />}
			</MainContent>
		</div>
	);
}

export default App;
