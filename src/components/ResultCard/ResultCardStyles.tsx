import {
    makeStyles,
    tokens,
    shorthands
} from "@fluentui/react-components";

export const useStyles = makeStyles({
    headerText: {
        fontSize: "1.5rem",
        lineHeight: "1.5rem",
    },
    resultText: {
        ...shorthands.margin("1.5rem", "0"),
        fontFamily: "monospace",
        fontSize: "2.5rem",
        fontWeight: "600",
        color: tokens.colorPalettePeachBorderActive,
    },
    trophyImage: {
        width: "10rem",
        height: "12rem",
    },
    buttonContainer: {
        display: "flex",
        columnGap: "2rem",
        marginTop: "1rem",
        ...shorthands.padding("1rem"),
    },
    restartButton: {
        fontSize: "1.2rem",
        ...shorthands.padding("1.2rem"),
        backgroundColor: tokens.colorPaletteYellowBackground3,
        color: tokens.colorNeutralForeground1Static,
        "&:hover": {
            backgroundColor: tokens.colorPaletteYellowBorder1,
        }
    },
    quitButton: {
        fontSize: "1.2rem",
        ...shorthands.padding("1.2rem"),
        backgroundColor: tokens.colorStatusWarningBackground3,
        color: tokens.colorNeutralForeground1Static,
        "&:hover": {
            backgroundColor: tokens.colorStatusWarningBorder1,
        }
    }
})