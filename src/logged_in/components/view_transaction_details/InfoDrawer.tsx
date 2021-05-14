import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import DrawerTabs from "./InfoDrawer/DrawerTabs";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const useStyles = makeStyles({
  root: {
    minWidth: "5em",
    width: "35em",
    maxWidth: " 100%",
  },
  paperAnchorRight: {
    width: "clamp(5em, 35em, 100%)",
  },
  list: {
    position: "relative",
    height: "100%",
  },
  fullList: {
    width: "auto",
  },
});

type Anchor = "top" | "left" | "bottom" | "right";

const InfoDrawer = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={classes.list}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Button onClick={() => toggleDrawer("right", false)}>Within list</Button> */}
      <DrawerTabs />
      <div
        className="footer"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          // height: "30px",
          backgroundColor: "#f6f6f6",
          padding: "10px",
          zIndex: 1000,
        }}
      >
        <Button color="primary" onClick={toggleDrawer(anchor, false)}>
          <ChevronLeftIcon /> Close
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer("right", true)}>right</Button>
        <Drawer
          // className={classes.root}
          classes={{
            // root: classes.root,
            paperAnchorRight: classes.paperAnchorRight,
          }}
          anchor={"right"}
          open={state["right"]}
          // onClose={toggleDrawer(anchor, false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default InfoDrawer;
