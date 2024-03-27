import { QuizContext } from "../quiz/QuizContext";
import { useContext } from "react";
import QUESTIONS from "../questions";
import trophy from '../assets/quiz-complete.png'

import {
    Text,
    Image,
    CompoundButton,
    makeStyles,
    tokens,
    shorthands
} from "@fluentui/react-components";

import { ArrowSyncCircleRegular } from "@fluentui/react-icons"

const useStyles = makeStyles({
    headerText: {
        fontSize: "1.5rem",
        lineHeight: "1.5rem"
    },
    resultText: {
        ...shorthands.margin("1.5rem", "0"),
        fontFamily: "monospace",
        fontSize: "2.5rem",
        color: tokens.colorPalettePeachBorderActive,
    },
    trophyImage: {
        width: "13rem",
        height: "15rem",
    },
    restartButton: {
        marginTop: "1rem",
        ...shorthands.padding("1rem"),
        fontSize: "1.3rem",
        backgroundColor: tokens.colorPaletteYellowBackground3,
        color: tokens.colorNeutralForeground1Static,
        "&:hover": {
            backgroundColor: tokens.colorPaletteYellowBorder1,
        }
    }
})

export default function ResultCard() {
    const classes = useStyles();
    const { userAnswers, handleRestart } = useContext(QuizContext);
    
    function calculateScore() {
        let score = 0;
        
        for(let currentQuestionIndex = 0;
            currentQuestionIndex < QUESTIONS.length;
            currentQuestionIndex++) {
                if(QUESTIONS[currentQuestionIndex].answers[0] === userAnswers[currentQuestionIndex]) {
                    score++;
                }
            }
        
        return score;
    }

    return (
        <>
           <Image
              className={classes.trophyImage}
              src={trophy}
              alt="trophy"
            />
            <Text className={classes.headerText} as="h2">Quiz Completed!</Text>
            <Text className={classes.resultText}>{`You Scored ${calculateScore()}/${QUESTIONS.length}`}</Text> 
            <CompoundButton
                className={classes.restartButton}
                icon={<ArrowSyncCircleRegular />}
                onClick={handleRestart}
            >
                Play Again
            </CompoundButton>
        </>
    )
}