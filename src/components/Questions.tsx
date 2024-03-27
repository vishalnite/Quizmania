import { useContext } from 'react';
import QUESTIONS from "../questions";
import QuestionTimer from './QuestionTimer';

import {
  Text,
  makeStyles,
} from "@fluentui/react-components";

import { QuizContext } from '../quiz/QuizContext';

const useStyles = makeStyles({
  quizHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  headerText: {
    fontSize: "1.5rem",
    lineHeight: "1.5rem"
  },
});

export default function Answers() {
    const classes = useStyles();
    const { userAnswers, handleSelectAnswer } = useContext(QuizContext);

    const currentQuestionIndex = userAnswers.length;

    return (
        <div className={classes.quizHeader}>
            <QuestionTimer 
                key={currentQuestionIndex}
                timeout={10000}
                onTimeout={() => handleSelectAnswer(null)} 
            />
            <Text className={classes.headerText} as="h2">
                {QUESTIONS[currentQuestionIndex].text}
            </Text>
        </div>
    );
};