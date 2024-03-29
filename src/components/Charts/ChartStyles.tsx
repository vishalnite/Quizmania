import {
    makeStyles,
    tokens,
    shorthands
} from "@fluentui/react-components";

export const useStyles = makeStyles({
    chart: {
        height: "100%",
        width: "100%",
        marginTop: "4rem",
        backgroundColor: tokens.colorNeutralForegroundInvertedDisabled,
        ...shorthands.padding("1rem"),
    }
})