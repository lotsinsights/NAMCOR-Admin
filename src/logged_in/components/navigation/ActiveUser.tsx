import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { Theme } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: "100%",
      padding: theme.spacing(2),
      textAlign: "center",
      backgroundColor: theme.palette.primary.main,
      // Typography color not configured
      color: "#fff",
    },
    title: {
      fontSize: 14,
      letterSpacing: 1,
      fontWeight: 700,
    },
    userName: {
      fontSize: 14,
      letterSpacing: 1,
      textTransform: "uppercase",
    },
    pos: {
      marginTop: 12,
      marginBottom: 12,
    },
  })
);

export default function ActiveUser() {
  const classes = useStyles();
  return (
    <Paper
      variant="outlined"
      color="primary"
      className={clsx(classes.root, classes.pos)}
    >
      <Typography className={classes.title}>CLIENT PORTAL</Typography>
      <Typography className={classes.userName}>Silas Shongola</Typography>
    </Paper>
  );
}
