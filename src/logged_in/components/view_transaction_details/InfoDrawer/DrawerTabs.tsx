import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    minWidth: "auto",
  },
  tabWrapper: {
    padding: ".3em .5em",
  },
}));

export default function DrawerTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" elevation={1}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab
            classes={{ root: classes.tab, wrapper: classes.tabWrapper }}
            label="Details"
            {...a11yProps(0)}
          />
          <Tab
            classes={{ root: classes.tab, wrapper: classes.tabWrapper }}
            label="Log"
            {...a11yProps(1)}
          />
          <Tab
            classes={{ root: classes.tab, wrapper: classes.tabWrapper }}
            label="Comments"
            {...a11yProps(2)}
          />
          {/* <Tab label="" {...a11yProps(3)} />
          <Tab label="" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} /> */}
        </Tabs>
      </AppBar>
      <TabPanel
        // style={{ height: "100%", overflowY: "hidden" }}
        value={value}
        index={0}
      >
        <div style={{ height: "100%", overflowY: "scroll" }}>
          Applicable a huge amount of data various types of content Pros useful
          with a huge amount of data and its size ability to collapse and hide
          some data a versatile form of data presentation Cons repetitive column
          names hard to compare particular data between rows Extras ability to
          filter and sort the content with ease ability to divide the content
          into separate pages Comparing This one is strictly related to the
          Transformed example but it deserves to be explained more. This
          solution may be very helpful when we want to compare the columns. For
          example, an offer or product functionalities. It’s also a similar to
          the Collapsed one I described above but it is ready for a larger
          amount of data. All we need to add is easy navigation through the
          whole table, displaying only two columns at a time. Applicable a huge
          amount of data various types of content Pros useful with a huge amount
          of data and its size ability to collapse and hide some data a
          versatile form of data presentation Cons repetitive column names hard
          time.
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Logs
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      {/* <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
    </div>
  );
}
