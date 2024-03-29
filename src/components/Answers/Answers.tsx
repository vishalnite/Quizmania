import { useContext } from 'react';
import QUESTIONS from "../../questions";
import { QuizContext } from '../../quiz/QuizContext';
import AnswerButton from '../AnswerButton/AnswerButton';

import { useStyles } from './AnswersStyles';

export default function Answers() {
    const classes = useStyles();
    const { userAnswers } = useContext(QuizContext);

    const currentQuestionIndex = userAnswers.length; 

    const shuffledAnswers = [...QUESTIONS[currentQuestionIndex].answers]
    shuffledAnswers.sort(() => Math.random() - 0.5)

    return (
        <ul className={classes.answerList}>
            {shuffledAnswers.map(answer => {
                return <li key={answer}>
                    <AnswerButton 
                        answer={answer} 
                        correctAnswer={QUESTIONS[currentQuestionIndex].answers[0]} 
                    />
                </li>
            })}
        </ul>
    );
};