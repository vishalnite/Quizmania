import { useContext } from 'react';
import QUESTIONS from "../../questions";
import QuestionTimer from '../QuestionTimer/QuestionTimer';
import { QuizContext } from '../../quiz/QuizContext';

import { Text } from "@fluentui/react-components";
import { useStyles } from './QuestionsStyles';

export default function Answers() {
    const classes = useStyles();
    const { timer, userAnswers, handleSelectAnswer } = useContext(QuizContext);

    const currentQuestionIndex = userAnswers.length;

    return (
        <div className={classes.quizHeader}>
            <QuestionTimer 
                key={currentQuestionIndex}
                timeout={timer * 1000}
                onTimeout={() => handleSelectAnswer(null)} 
            />
            <Text className={classes.headerText} as="h2">
                {QUESTIONS[currentQuestionIndex].text}
            </Text>
        </div>
    );
};