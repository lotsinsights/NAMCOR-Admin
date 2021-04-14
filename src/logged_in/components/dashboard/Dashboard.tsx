import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import green from "@material-ui/core/colors/green";
import Grid from "@material-ui/core/Grid";
import { Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import PageToolbar from "../../../shared/components/PageToolbar";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { TrendingDownOutlined } from "@material-ui/icons";
import clsx from "clsx";
import Donut from "./Donut";
import AreaChart from "./AreaChart";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3, 10),
  },
  box: {
    marginTop: "50px",
  },
  gridContainer: {
    flexGrow: 1,
  },
  card: {
    minWidth: 275,
  },
  cardFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardPercentSpan: {
    color: green[600],
  },
  cardTextSpan: {
    marginLeft: 10,
  },
  flexMiddle: {
    display: "flex",
    alignItems: "center",
  },
  green: {
    color: "#fff",
    backgroundColor: green[500],
  },
  lightGreen: {
    color: green[600],
    backgroundColor: green[100],
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const CardItem = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Box className={classes.cardFlex}>
          <Box>
            <Typography variant="button" color="textSecondary" gutterBottom>
              Budget
            </Typography>

            <Typography variant="h5" component="h2" gutterBottom>
              $24,000
            </Typography>
          </Box>

          <Box>
            <Avatar className={clsx(classes.green, classes.large)}>
              <AssignmentIcon />
            </Avatar>
          </Box>
        </Box>
        <Box>
          <Typography
            className={classes.flexMiddle}
            component={"div"}
            variant="body1"
            color="textSecondary"
            gutterBottom
          >
            <div className={clsx(classes.cardPercentSpan, classes.flexMiddle)}>
              <Avatar className={classes.lightGreen}>
                <TrendingDownOutlined />
              </Avatar>
              <span>{"  "}</span>
              12%
            </div>
            <span className={classes.cardTextSpan}>since last month</span>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

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

      <Box className={classes.box}>
        <div className={classes.gridContainer}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <CardItem />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <CardItem />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <CardItem />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <CardItem />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <CardItem />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <CardItem />
            </Grid>
          </Grid>
        </div>
      </Box>

      <Box className={classes.box}>
        <div className={classes.gridContainer}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card className={classes.card} variant="outlined">
                <CardContent>
                  <Donut />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card className={classes.card} variant="outlined">
                <CardContent>
                  <AreaChart />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Box>
  );
};

export default Dashboard;
