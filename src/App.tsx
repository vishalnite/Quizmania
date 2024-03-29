import { useContext } from "react";
import { QuizContext } from "./quiz/QuizContext";
import Header from "./components/Header/Header";
import Quiz from "./components/Quiz/Quiz";
import StartScreen from "./components/StartScreen/StartScreen";

function App() {
  const { showStartScreen } = useContext(QuizContext);

  return (
    <>
      <Header />
      <main>
        {
          showStartScreen ?
          <StartScreen /> :
          <Quiz />
        }
      </main>
    </>
  )
}

export default App
