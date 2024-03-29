import {
    makeStyles,
    shorthands,
} from "@fluentui/react-components";
    
export const useStyles = makeStyles({
    heading: {
        fontSize: "2rem",
        width: "100%",
        textAlign: "center",
        marginBottom: "3rem"
    },
    root: {
      alignItems: "flex-start",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
    },
    panels: {
      ...shorthands.padding(0, "10px"),
      "& th": {
        textAlign: "left",
        ...shorthands.padding(0, "30px", 0, 0),
      },
    },
});