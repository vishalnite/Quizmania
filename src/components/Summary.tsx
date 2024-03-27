import { QuizContext } from "../quiz/QuizContext";
import { useContext } from "react";
import QUESTIONS from "../questions";

import {
    makeStyles,
    tokens,
    shorthands
} from "@fluentui/react-components";

const useStyles = makeStyles({
    heading: {
        fontSize: "2rem",
        textAlign: "center",
        marginBottom: "3rem"
    },
    container: {
        ...shorthands.margin("4rem", "0")
    },
    questionText: {
        fontSize: "1.5rem",
        lineHeight: "1.8rem"
    },
    answerList: {
        listStyleType: "none",
        ...shorthands.padding("0", "0.5rem")
    },
    answers: {
        fontSize: "1.1rem",
        ...shorthands.padding("0.5rem", "0")
    },
    response: {
        fontFamily: 'cursive',
        fontSize: "1.1rem"
    },
    correct: {
        color: tokens.colorStatusSuccessForeground3
    },
    wrong: {
        color: tokens.colorStatusDangerBackground3
    },
    skipped: {
        color: tokens.colorStatusWarningBackground3
    }
})

export default function Summary() {
    const classes = useStyles();
    const { userAnswers } = useContext(QuizContext);
    

    return (
        <div>
           <h2 className={classes.heading}>QUIZ SUMMARY</h2>
           {
            QUESTIONS.map((question) => {
                let currentQuestionIndex = QUESTIONS.findIndex((itr) => question === itr)
                
                return (
                    <div key={question.id} className={classes.container}>
                        <p className={classes.questionText}>{question.text}</p>
                        <ul className={classes.answerList}>
                            {question.answers.map(answer => {
                                return (
                                    <li 
                                        key={answer}
                                        className={classes.answers}  
                                    >
                                        <span className={answer === question.answers[0] ? classes.correct : ''}>{answer}</span>
                                    </li>
                                )
                            })}
                        </ul>
                        <p className={classes.response}>
                            Your Response: {
                                userAnswers[currentQuestionIndex] === null ? 
                                <span className={classes.skipped}>Not Answered!!!</span> :
                                <span 
                                    className={userAnswers[currentQuestionIndex] === question.answers[0] ? classes.correct : classes.wrong}
                                >
                                    {userAnswers[currentQuestionIndex]}
                                </span>
                            }
                        </p>
                    </div>
                )
            })
           }
        </div>
    )
}