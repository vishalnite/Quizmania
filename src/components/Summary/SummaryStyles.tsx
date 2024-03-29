import {
    makeStyles,
    tokens,
    shorthands
} from "@fluentui/react-components";

export const useStyles = makeStyles({
    heading: {
        fontSize: "2rem",
        textAlign: "center",
        marginBottom: "3rem"
    },
    container: {
        ...shorthands.margin("3rem", "0")
    },
    questionText: {
        fontSize: "1.5rem",
        lineHeight: "1.8rem",
        fontWeight: "500"
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