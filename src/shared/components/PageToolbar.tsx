import Box from "@material-ui/core/Box";
import { Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(3),
  },
}));

interface Props {
  title?: string;
  buttons?: any;
}

const PageToolbar = (props: Props) => {
  const classes = useStyles();
  const { title, buttons } = props;
  return (
    <Box className={classes.toolbar}>
      <Typography variant="h5" component="h2">
        {title}
      </Typography>
      <Box>{buttons}</Box>
    </Box>
  );
};

export default PageToolbar;
