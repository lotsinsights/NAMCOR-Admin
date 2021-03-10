import { useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TabsNavigation from "./TabsNavigation";
import ReadMessage from "./ReadMessage";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // padding: theme.spacing(3, 10),
    height: "100%",
  },

  // Content
  content: {
    display: "flex",
    height: "100%",
  },
  navigation: {
    width: 340,
  },
  body: {
    flexGrow: 1,
    flexShrink: 1,
  },
}));

const Chats = () => {
  const classes = useStyles();

  useEffect(() => {
    document.title = "NAMCOR - Chats";
    return () => {};
  }, []);

  return (
    <Box className={classes.root}>
      {/* <PageHeader title={"Chats"} path="/admin/create-account" /> */}

      <Box className={classes.content}>
        <Box className={classes.navigation}>
          <TabsNavigation />
        </Box>
        <Box className={classes.body}>
          <ReadMessage />
        </Box>
      </Box>
    </Box>
  );
};

export default Chats;
