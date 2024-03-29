import { useState, useEffect } from 'react';
import { useStyles } from './QuestionTimerStyles';

interface TimerProps {
    timeout: number,
    onTimeout: () => void
}

export default function QuestionTimer({ timeout, onTimeout }: TimerProps) {
    const [ remainingTime, setRemainingTime ] = useState<number>(timeout);

    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout)

        return () => {
            clearTimeout(timer);
        }
    }, [timeout, onTimeout])
    
    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 10);
        }, 10)

        return () => {
            clearInterval(interval);
        }
    }, [])

    const classes = useStyles();

    return <progress className={classes.progressBar} max={timeout} value={remainingTime} />
};