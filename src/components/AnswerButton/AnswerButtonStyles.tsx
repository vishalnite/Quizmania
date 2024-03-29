import { 
    makeStyles, 
    tokens,
    shorthands,
} from "@fluentui/react-components";

export const useStyles = makeStyles({
    answerButton: {
        ...shorthands.padding("1rem"),
        ...shorthands.margin("0.5rem", "0px"),
        width: "100%",
        backgroundColor: tokens.colorBrandStroke2Hover,
        "&:hover": {
            backgroundColor: tokens.colorPaletteYellowBorder1
        }
    },
    correctAnswerButton: {
        ...shorthands.padding("1rem"),
        ...shorthands.margin("0.5rem", "0px"),
        width: "100%",
        backgroundColor: tokens.colorStatusSuccessForeground3,
        "&:hover": {
            backgroundColor: tokens.colorStatusSuccessForeground3
        }
    },
    wrongAnswerButton: {
        ...shorthands.padding("1rem"),
        ...shorthands.margin("0.5rem", "0px"),
        width: "100%",
        backgroundColor: tokens.colorStatusDangerBackground3,
        "&:hover": {
            backgroundColor: tokens.colorStatusDangerBackground3
        }
    },
})