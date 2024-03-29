import {
    tokens,
    makeStyles,
    shorthands,
} from "@fluentui/react-components";

export const useStyles = makeStyles({
  card: {
    display: "flex",
    alignItems: "center",
    ...shorthands.margin("auto"),
    ...shorthands.padding("3rem"),
    width: "800px",
    maxWidth: "100%",
    ...shorthands.gap("0px"),
    backgroundColor: tokens.colorBrandStroke2,
  },
  cardHeader: {
    width: "100%",
  },
  cardPreview: {
    width: "100%",
  },
});