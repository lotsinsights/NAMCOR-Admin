import { useTheme, withStyles } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";
import MuiDrawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { AssessmentOutlined } from "@material-ui/icons";
import { StoreOutlined } from "@material-ui/icons";
import { ReceiptOutlined } from "@material-ui/icons";
import { SupervisorAccountOutlined } from "@material-ui/icons";
import { SettingsOutlined } from "@material-ui/icons";
import { ChatOutlined } from "@material-ui/icons";
import { Fragment, useRef, useState } from "react";
import ActiveUser from "./ActiveUser";
import { NavLink, useRouteMatch } from "react-router-dom";
import { Collapse, Hidden } from "@material-ui/core";
import clsx from "clsx";

const drawerWidth = 240;

const styles = (theme: any) => ({
  root: {
    // display: "flex",
    // width: drawerWidth,
  },
  hide: {
    display: "none",
  },
  paper: {
    width: drawerWidth,
    backgroundColor: "#FFF",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    border: 0,
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  listItem: {
    color: "#222",
  },
  removeTextDecoration: {
    textDecoration: "none",
  },
  activeTab: {
    display: "block",
    position: "relative" as "relative",
    backgroundColor: "#f9f9f9",
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: 0,
      width: 4,
      height: "100%",
      backgroundColor: theme.palette.primary.main,
    },
    "&::after": {
      content: '""',
      position: "absolute",
      right: 0,
      top: 0,
      width: 4,
      height: "100%",
      backgroundColor: theme.palette.primary.main,
    },
  },
  activeNestedTab: {
    // textDecoration: "underline",
    "&::before": {
      content: '""',
      position: "absolute",
      left: 40,
      top: "50%",
      transform: "translateY(-50%)",
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: theme.palette.primary.main,
    },
    "&::after": {
      display: "none",
      // backgroundColor: grey[400],
    },
  },
  nested: {
    paddingLeft: theme.spacing(9),
  },
});

interface Props {
  // selectedTab: string;
  classes: any;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

const Navbar = (props: Props) => {
  const { classes, handleDrawerToggle, mobileOpen } = props;

  const theme = useTheme();

  // Will be use to make website more accessible by screen readers
  const links: any = useRef([]);
  const { url } = useRouteMatch();

  const navItems = [
    {
      link: `${url}/dashboard`,
      icon: <AssessmentOutlined fontSize="small" />,
      name: "Dashboard",
    },
    {
      link: "/admin/products",
      icon: <StoreOutlined fontSize="small" />,
      name: "Products",
    },
    {
      link: "/admin/requests",
      icon: <ReceiptOutlined fontSize="small" />,
      name: "Requests",
    },
    {
      link: "/admin/quotes",
      icon: <ReceiptOutlined fontSize="small" />,
      name: "Quotes",
    },
    {
      link: "/admin/orders",
      icon: <ReceiptOutlined fontSize="small" />,
      name: "Orders",
      nested: [
        {
          link: "/admin/orders/purchase",
          icon: <ReceiptOutlined fontSize="small" />,
          name: "Purchase",
        },
        {
          link: "/admin/orders/sales",
          icon: <ReceiptOutlined fontSize="small" />,
          name: "Sales",
        },
      ],
    },
    {
      link: "/admin/invoices",
      icon: <ReceiptOutlined fontSize="small" />,
      name: "Invoices",
    },
    {
      link: "/admin/accounts",
      icon: <SupervisorAccountOutlined fontSize="small" />,
      name: "Accounts",
    },
    // {
    //   link: "/admin/settings",
    //   icon: <SettingsOutlined fontSize="small" />,
    //   name: "Settings",
    // },
    {
      link: "/admin/chats",
      icon: <ChatOutlined fontSize="small" />,
      name: "Chats",
    },
  ];

  // Drawer
  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <ActiveUser />
      </div>

      <List>
        {navItems.map((element, index) => (
          <Fragment key={index}>
            <NavLink
              to={element.link}
              activeClassName={classes.activeTab}
              className={classes.removeTextDecoration}
              key={index}
              ref={(node) => {
                links.current[index] = node;
              }}
            >
              <ListItem button className={classes.listItem}>
                <ListItemIcon>{element.icon}</ListItemIcon>
                <ListItemText primary={element.name} />
              </ListItem>
            </NavLink>
            {/* Nested list elements */}
            <Collapse in={true} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {element.nested &&
                  element.nested.map((nestedElement, nestedIndex) => (
                    <NavLink
                      to={nestedElement.link}
                      activeClassName={clsx(
                        classes.activeTab,
                        classes.activeNestedTab
                      )}
                      className={classes.removeTextDecoration}
                      key={"nested:" + nestedIndex}
                      ref={(node) => {
                        links.current[nestedIndex] = node;
                      }}
                    >
                      <ListItem
                        button
                        className={clsx(classes.nested, classes.listItem)}
                      >
                        {/* <ListItemIcon>{nestedElement.icon}</ListItemIcon> */}
                        <ListItemText primary={nestedElement.name} />
                      </ListItem>
                    </NavLink>
                  ))}
              </List>
            </Collapse>
          </Fragment>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <>
      {/* <MuiDrawer
        variant="permanent"
        elevation={0}
        classes={{ paper: classes.paper }}
        className={classes.root}
      >
        {drawer}
      </MuiDrawer> */}

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <MuiDrawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{ paper: classes.paper }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </MuiDrawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <MuiDrawer
            variant="permanent"
            elevation={0}
            classes={{ paper: classes.paper }}
            className={classes.root}
          >
            {drawer}
          </MuiDrawer>
        </Hidden>
      </nav>
    </>
  );
};

export default withWidth()(withStyles(styles, { withTheme: true })(Navbar));
