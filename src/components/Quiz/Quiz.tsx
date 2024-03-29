import { useContext } from 'react';
import QUESTIONS from "../../questions";
import ResultCard from '../ResultCard/ResultCard';
import Questions from '../Questions/Questions';
import Answers from '../Answers/Answers';
import { QuizContext } from '../../quiz/QuizContext';
import { useStyles } from './QuizStyles';
import QuizHistory from '../QuizHistory/QuizHistory'

import {
  Card,
  CardHeader,
  CardPreview
} from "@fluentui/react-components";

export default function Quiz() {
  const classes = useStyles();
  const { userAnswers } = useContext(QuizContext)

  const currentQuestionIndex = userAnswers.length;

  const isQuizComplete = currentQuestionIndex === QUESTIONS.length;

  if(isQuizComplete) {
    return ( 
      <>
        <Card className={classes.card}>
          <ResultCard />
        </Card>
        <p></p>
        <Card className={classes.card}>
          <QuizHistory />
        </Card>
      </>
    );
  }
  else {
    return (
      <Card className={classes.card}>
        <CardHeader 
          className={classes.cardHeader}
          header={
            <Questions />
          }
        />
        <CardPreview className={classes.cardPreview}>
          <Answers />
        </CardPreview>
      </Card>
    );
  }
};