import QUESTIONS from "../../questions";
import PieChart from "../Charts/PieChart";
import { useStyles } from "./SummaryStyles";

interface propType {
    userAnswers: (string | null)[];
}

export default function Summary( { userAnswers }: propType ) {
    const classes = useStyles();
    
    let correctCount = 0, wrongCount = 0;
    
    for(let currentIndex = 0; currentIndex < QUESTIONS.length; currentIndex++) {
        if(QUESTIONS[currentIndex].answers[0] === userAnswers[currentIndex]) {
            correctCount++;
        }
        else {
            wrongCount++;
        }
    }

    const data = [
        {value: correctCount, name: "Correct", color: "#00FF00"},
        {value: wrongCount, name: "Wrong", color: '#FF0000'}
    ]

    const colors = ['#66BB6A', '#EF5350'];

    return (
        <div>
            <PieChart data={data} colors={colors} />
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