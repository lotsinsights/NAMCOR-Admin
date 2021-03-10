import Box from "@material-ui/core/Box";
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import PageToolbar from "../../../shared/components/PageToolbar";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3, 10),
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    document.title = "NAMCOR - Dashboard";
    return () => {};
  }, []);

  return (
    <Box className={classes.root}>
      <PageToolbar title="Dashboard" />
    </Box>
  );
};

export default Dashboard;
