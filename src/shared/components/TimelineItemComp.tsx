import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import HotelIcon from "@material-ui/icons/Hotel";

import RepeatIcon from "@material-ui/icons/Repeat";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {
  CheckOutlined,
  DeleteOutlined,
  EditOutlined,
  LoopOutlined,
} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "4px 10px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

interface Props {
  checkpoint: any;
  isLast: boolean;
}

const TimelineItemComp = (props: Props) => {
  const classes = useStyles();

  //   Props
  const { checkpoint, isLast = false } = props;
  const { time, title, description, isChecked } = checkpoint;

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant="body2" color="textSecondary">
          {time}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        {isChecked ? (
          <TimelineDot color="primary">
            <CheckOutlined />
          </TimelineDot>
        ) : (
          <TimelineDot>
            <LoopOutlined />
          </TimelineDot>
        )}
        {!isLast && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={1} className={classes.paper}>
          <Typography variant="button" component="h1">
            {title}
          </Typography>
          <Typography>{description}</Typography>
          <Box>
            <IconButton
              aria-label="delete"
              className={classes.margin}
              size="small"
            >
              <EditOutlined fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="delete"
              className={classes.margin}
              size="small"
            >
              <DeleteOutlined fontSize="inherit" />
            </IconButton>
          </Box>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimelineItemComp;
