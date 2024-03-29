import {
    makeStyles,
    tokens,
    shorthands
} from '@fluentui/react-components';

export const useStyles = makeStyles({
    form: {
        display: "flex",
        flexDirection: "column",
        rowGap: "3rem",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: tokens.colorNeutralBackgroundAlpha2,
        ...shorthands.padding("4rem", "6rem"),
        ...shorthands.margin("4rem", "auto"),
        width: "600px",
        maxWidth: "100%",
        ...shorthands.borderRadius("1rem")
    },
    formLabel: {
        width: "100%",
    },
    formInput: {
        ...shorthands.padding("0.8rem"),
        fontSize: "1.2rem",
        ...shorthands.border("3px", "solid", tokens.colorCompoundBrandForeground1),
        "&:hover":  {
            ...shorthands.border("3px", "solid", tokens.colorCompoundBrandForeground1),
        }
    },
    startButton: {
        width: "100%",
        fontSize: "1.5rem",
        backgroundColor: tokens.colorCompoundBrandForeground1,
        color: tokens.colorNeutralStrokeOnBrand,
        "&:hover": {
            backgroundColor: tokens.colorCompoundBrandForeground1Hover,
            color: tokens.colorNeutralStrokeOnBrand,
        }
    }
})
