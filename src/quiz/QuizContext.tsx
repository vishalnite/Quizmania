import { useState, createContext, ReactNode } from 'react';

interface QuizContextType {
    userAnswers: (string | null)[];
    handleSelectAnswer: (selectedAnswer: string | null) => void;
    handleRestart: () => void
}

export const QuizContext = createContext<QuizContextType>({
    userAnswers: [],
    handleSelectAnswer: () => {},
    handleRestart: () => {}
})

interface QuizContextProviderProps {
    children: ReactNode
}

export default function QuizContextProvider({ children } : QuizContextProviderProps) {
    const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);
    
    function handleSelectAnswer(selectedAnswer: string | null) {
        setTimeout(() => {

        }, 2000)
        
        setUserAnswers((prevAnswers) => {
            return [...prevAnswers, selectedAnswer]
        })
    }

    function handleRestart() {
        setUserAnswers([])
    }

    const quizValue = {
        userAnswers: userAnswers,
        handleSelectAnswer: handleSelectAnswer,
        handleRestart: handleRestart
    }

    return <QuizContext.Provider value={quizValue}>
        {children}
    </QuizContext.Provider>

}