import { useContext } from 'react';
import QUESTIONS from "../questions";
import ResultCard from './ResultCard';
import Questions from './Questions';
import Answers from './Answers';
import Summary from './Summary';

import {
  Card,
  CardHeader,
  CardPreview,
  tokens,
  makeStyles,
  shorthands,
} from "@fluentui/react-components";

import { QuizContext } from '../quiz/QuizContext';

const useStyles = makeStyles({
  card: {
    display: "flex",
    alignItems: "center",
    ...shorthands.margin("auto"),
    ...shorthands.padding("3rem"),
    width: "800px",
    maxWidth: "100%",
    ...shorthands.gap("0px"),
    backgroundColor: tokens.colorBrandStroke2,
  },
  cardPreview: {
    width: "100%",
  },
});

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
        <Card className={classes.card}><Summary /></Card>
        
      </>
    );
  }

  return (
    <Card className={classes.card}>
      <CardHeader 
        header={
          <Questions />
        }
      />

      <CardPreview className={classes.cardPreview}>
        <Answers />
      </CardPreview>
    </Card>
  );
};