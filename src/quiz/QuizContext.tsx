import { useState, createContext, useContext, ReactNode } from 'react';
import QUESTIONS from '../questions';

interface QuizContextType {
    timer: number; 
    showStartScreen: boolean;
    userAnswers: (string | null)[];
    userAnswersHistory: (string | null)[][];
    handleSelectAnswer: (selectedAnswer: string | null) => void;
    handleRestart: () => void;
    toggleStart: () => void;
    updateTimer: (value: number) => void;
}

export const QuizContext = createContext<QuizContextType>({
    timer: 10,
    showStartScreen: true,
    userAnswers: [],
    userAnswersHistory: [],
    handleSelectAnswer: () => {},
    handleRestart: () => {},
    toggleStart: () => {},
    updateTimer: () => {},
})

interface QuizContextProviderProps {
    children: ReactNode
}

export default function QuizContextProvider({ children } : QuizContextProviderProps) {
    const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);
    const [showStartScreen, setShowStartScreen] = useState<boolean>(true);
    const [timer, setTimer] = useState<number>(10);
    const { userAnswersHistory } = useContext(QuizContext);

    function toggleStart() {
        userAnswersHistory.length = 0;
        if(!showStartScreen) {
            setTimer(10);
        }
        setShowStartScreen(prevState => !prevState);
    }

    function handleSelectAnswer(selectedAnswer: string | null) {
        setUserAnswers((prevAnswers) => {
            const newUserAnswers = [...prevAnswers, selectedAnswer];
            if(newUserAnswers.length === QUESTIONS.length) {
                userAnswersHistory.push(newUserAnswers);
            }
            return newUserAnswers;
        })
    }

    function handleRestart() {
        setUserAnswers([]);
    }

    function updateTimer(newTimer: number) {
        setTimer(newTimer);
    }

    const quizValue = {
        timer: timer,
        showStartScreen: showStartScreen,
        userAnswers: userAnswers,
        userAnswersHistory: userAnswersHistory,
        handleSelectAnswer: handleSelectAnswer,
        handleRestart: handleRestart,
        toggleStart: toggleStart,
        updateTimer: updateTimer,
    }

    return <QuizContext.Provider value={quizValue}>
        {children}
    </QuizContext.Provider>
}