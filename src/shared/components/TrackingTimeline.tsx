import React from "react";
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
import TimelineItemComp from "./TimelineItemComp";
import { Fragment } from "react";

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

const TrackingTimeline = () => {
  const classes = useStyles();

  const checkpoints = [
    {
      time: "9:30 am",
      title: "Pending",
      description: "Because you need strength",
      isChecked: false,
    },
    {
      time: "10:30 am",
      title: "Eat",
      description: "Because you need strength",
      isChecked: true,
    },
    {
      time: "11:30 am",
      title: "Sleep",
      description: "Rest",
      isChecked: true,
    },
    {
      time: "12:30 am",
      title: "Gym",
      description: "Because you need strength",
      isChecked: true,
    },
  ];

  return (
    <Timeline align="alternate">
      {checkpoints.map((checkpoint, index) => (
        <Fragment key={index}>
          <TimelineItemComp
            checkpoint={checkpoint}
            isLast={checkpoints.length - 1 === index}
          />
        </Fragment>
      ))}
    </Timeline>
  );
};

export default TrackingTimeline;
