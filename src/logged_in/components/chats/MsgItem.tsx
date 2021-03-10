import React from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import clsx from "clsx";
import MsgOptions from "./MsgOptions";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    border: "1px solid",
    borderColor: theme.palette.background.default,
    padding: theme.spacing(2),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    position: "relative",
    "&:hover": {
      display: "block",
      backgroundColor: theme.palette.background.default,
      cursor: "pointer",
      "& $controls": { display: "block" },
    },
  },
  open: {
    backgroundColor: theme.palette.grey[200],
  },
  grid: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  smallAvatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  singleLine: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  controls: {
    display: "none",
    position: "absolute",
    top: 0,
    right: 0,
  },
}));

const MsgItem = (props: any) => {
  const classes = useStyles();
  const open: boolean = props.open;

  return (
    <Box
      className={clsx({
        [classes.root]: true, //always applies
        [classes.open]: open, //only when open === true
      })}
    >
      <div className={classes.grid}>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Avatar className={clsx(classes.smallAvatar, classes.purple)}>
              N
            </Avatar>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="subtitle2" component="h6">
              NAMPOWER
            </Typography>
            <Typography
              className={classes.singleLine}
              variant="body2"
              component="p"
            >
              How Autodesk reduced manual processes by 90%
            </Typography>
            <Typography
              className={classes.singleLine}
              variant="caption"
              display="block"
              gutterBottom
            >
              Autodesk Technology Centers help customers, industry leaders,
              academics and startups create cutting edge tech together. Read on
              to learn how Autodesk used Airtable to reduce email
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography
              //   className={classes.singleLine}
              variant="caption"
              display="block"
              gutterBottom
            >
              Thur 10/11
            </Typography>
          </Grid>
        </Grid>
        <Box className={classes.controls}>
          <MsgOptions />
        </Box>
      </div>
    </Box>
  );
};

export default MsgItem;
