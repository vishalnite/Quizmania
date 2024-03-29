import { makeStyles } from "@fluentui/react-components";

export const useStyles = makeStyles({
    quizHeader: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%"
    },
    headerText: {
      fontSize: "1.5rem",
      lineHeight: "1.5rem",
      textAlign: "center"
    },
});