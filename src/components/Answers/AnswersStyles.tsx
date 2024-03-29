import {
    makeStyles,
    shorthands,
} from "@fluentui/react-components";

export const useStyles = makeStyles({
    answerList: {
        listStyleType: "none",
        ...shorthands.padding("0"),
    },
});