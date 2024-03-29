import { useContext } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { QuizContext } from "../../quiz/QuizContext";
import { useStyles } from './StartScreenStyles';

import {
    Field, 
    Input,
    CompoundButton,
} from '@fluentui/react-components';

import { PlayCircleRegular } from "@fluentui/react-icons";

type formInput = {
    timer: number
}

export default function StartScreen () {
    const { timer, updateTimer, toggleStart } = useContext(QuizContext);
    const classes = useStyles();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<formInput>()
    
    const onSubmit: SubmitHandler<formInput> = (data) => {
        updateTimer(Number(data.timer));
        toggleStart();
    }

    return (
        <form className={classes.form}>
            <Field
                className={classes.formLabel}
                label="Set Timer"
                size="large"
                validationState={errors.timer ? "error" : "success"}
                validationMessage={errors.timer?.message as string}
            >
                <Input 
                    className={classes.formInput}
                    type="number"
                    {...register("timer", {
                        min: {
                            value: 0,
                            message: "Time can't be negative"
                        },
                        max: {
                            value: 60,
                            message: "Set a timer within 60 seconds"
                        }
                    })}
                    defaultValue={timer.toString()}
                    contentAfter="Seconds"
                />
            </Field>
            <CompoundButton
                className={classes.startButton}
                icon={<PlayCircleRegular />}
                onClick={handleSubmit(onSubmit)}
            >
                Start Quiz
            </CompoundButton>
        </form>
    );
}