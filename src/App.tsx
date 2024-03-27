import QuizContextProvider from "./quiz/QuizContext";
import Header from "./components/Header";
import Quiz from "./components/Quiz";

function App() {
  return (
    <QuizContextProvider>
      <Header />
      <main>
        <Quiz />
      </main>
    </QuizContextProvider>
  )
}

export default App
