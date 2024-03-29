import { useContext } from "react";
import { QuizContext } from "../../quiz/QuizContext";
import QUESTIONS from "../../questions";
import trophy from '../../assets/quiz-complete.png'
import { useStyles } from "./ResultCardStyles";
import LineChart from "../Charts/LineChart";

import {
    Text,
    Image,
    CompoundButton,
} from "@fluentui/react-components";

import { ArrowSyncCircleRegular, DismissCircleRegular } from "@fluentui/react-icons"

export default function ResultCard() {
    const classes = useStyles();
    const { userAnswers, userAnswersHistory, handleRestart, toggleStart } = useContext(QuizContext);

    function calculateScore(userAnswers: (string | null)[]) {
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

    const xdata: string[] = [];
    const ydata: number[] = [];

    for(let currentIndex = 0; currentIndex < userAnswersHistory.length; currentIndex++) {
        xdata.push(`Attempt ${currentIndex + 1}`);
        ydata.push(calculateScore(userAnswersHistory[currentIndex]))
    }

    return (
        <>
           <Image
              className={classes.trophyImage}
              src={trophy}
              alt="trophy"
            />
            <Text className={classes.headerText} as="h2">Quiz Completed!</Text>
            <Text className={classes.resultText}>{`You Scored ${calculateScore(userAnswers)}/${QUESTIONS.length}`}</Text> 
            <div className={classes.buttonContainer}>
                <CompoundButton
                    className={classes.restartButton}
                    icon={<ArrowSyncCircleRegular />}
                    shape="circular"
                    onClick={handleRestart}
                >
                    Play Again
                </CompoundButton>
                <CompoundButton
                    className={classes.quitButton}
                    icon={<DismissCircleRegular />}
                    shape="circular"
                    onClick={() => {
                        toggleStart()
                        handleRestart()
                    }}
                >
                    Quit Game
                </CompoundButton>
            </div>
            <LineChart chartTitle="Performance Trend" xdata={xdata} ydata={ydata} />
        </>
    )
}