import { useState, useContext } from 'react';
import { QuizContext } from '../../quiz/QuizContext';
import Summary from '../Summary/Summary';
import { useStyles } from './QuizHistoryStyles';

import {
  Tab,
  TabList,
} from "@fluentui/react-components";

import { QuizNewRegular } from "@fluentui/react-icons";

export default function QuizHistory() {
  const classes = useStyles();

  const { userAnswersHistory } = useContext(QuizContext);
  const [selectedValue, setSelectedValue] = useState<number>(userAnswersHistory.length - 1);

  const handleClick = (indexValue: number) => {
    setSelectedValue(indexValue);
  };

  return (
    <div className={classes.root}>
      <h2 className={classes.heading}>Quiz History</h2>
      <TabList defaultSelectedValue={userAnswersHistory.length - 1}>
        {
          userAnswersHistory.map(userAnswers => {
            const currentIndex = userAnswersHistory.findIndex(answers => answers === userAnswers); 

            return (
              <Tab 
                key={currentIndex} 
                icon={<QuizNewRegular />} 
                value={currentIndex}
                onClick={()=> handleClick(currentIndex)} 
              >
                Attempt {currentIndex + 1}
              </Tab>)
          })
        }
      </TabList>
      <div className={classes.panels}>
        <Summary userAnswers={userAnswersHistory[selectedValue]} />
      </div>
    </div>
  );
};