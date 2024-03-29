import { useState, useContext } from 'react';
import { QuizContext } from '../../quiz/QuizContext';
import { useStyles } from './AnswerButtonStyles';

import { Button } from "@fluentui/react-components";

type propsType = {
    answer: string,
    correctAnswer: string
}

export default function AnswerButton({ answer, correctAnswer }: propsType) {
    const classes = useStyles();
    const [answerStatus, setAnswerStatus] = useState(classes.answerButton);
    const { handleSelectAnswer } = useContext(QuizContext);
    
    function handleClick() {
        setAnswerStatus(answer === correctAnswer ?
                        classes.correctAnswerButton:
                        classes.wrongAnswerButton);
        setTimeout(() => {
            handleSelectAnswer(answer)
        }, 500)
    }

    return (
        <Button
            className={answerStatus}
            onClick={handleClick}
        >
            {answer}
        </Button>
    );
};