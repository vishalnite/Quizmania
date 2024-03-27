import { useContext } from 'react';
import QUESTIONS from "../questions";


import {
  Button,
  tokens,
  makeStyles,
  shorthands,
} from "@fluentui/react-components";

import { QuizContext } from '../quiz/QuizContext';

const useStyles = makeStyles({
    answerList: {
        listStyleType: "none",
        ...shorthands.padding("0"),
    },
    answerButton: {
        ...shorthands.padding("1rem"),
        ...shorthands.margin("0.5rem", "0px"),
        width: "100%",
        backgroundColor: tokens.colorBrandStroke2Hover,
        "&:hover": {
            backgroundColor: tokens.colorPaletteYellowBorder1
        }
    },
});

export default function Questions() {
    const classes = useStyles();
    const { userAnswers, handleSelectAnswer } = useContext(QuizContext);

    const currentQuestionIndex = userAnswers.length; 

    const shuffledAnswers = [...QUESTIONS[currentQuestionIndex].answers]
    shuffledAnswers.sort(() => Math.random() - 0.5)

    return (
        <ul className={classes.answerList}>
            {shuffledAnswers.map(answer => {
                return <li key={answer}>
                    <Button
                        className={classes.answerButton}
                        onClick={() => handleSelectAnswer(answer)}
                    >
                        {answer}
                    </Button>
                </li>
            })}
        </ul>
    );
};