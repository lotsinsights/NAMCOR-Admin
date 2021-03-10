import React from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import MsgItem from "./MsgItem";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box className={classes.panel}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 340,
    height: "100%",
  },
  bg: {
    backgroundColor: theme.palette.background.paper,
  },
  margin0: {
    margin: 0,
  },
  tab: {
    flexGrow: 0,
    flexShrink: "unset",
    minWidth: 100,
    width: "auto",
    padding: theme.spacing(0, 6),
  },
  panel: {
    padding: theme.spacing(0.5),
  },
}));

export default function TabsNavigation() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.bg}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          scrollButtons="auto"
          // textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab className={classes.tab} label="Focused" {...a11yProps(0)} />
          <Tab className={classes.tab} label="Teams" {...a11yProps(1)} />
          {/* <Button>Filter</Button> */}
        </Tabs>
      </AppBar>
      <hr className={classes.margin0} />
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <MsgItem />
          <MsgItem />
          <MsgItem />
          <MsgItem open={true} />
          <MsgItem />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <MsgItem />
          <MsgItem />
          <MsgItem />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
