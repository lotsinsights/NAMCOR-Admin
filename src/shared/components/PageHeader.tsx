import { makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
  margins: {
    margin: theme.spacing(0, 2),
  },
}));

interface Props {
  title: string;
  path: string;
}

const PageHeader = (props: Props) => {
  const classes = useStyles();
  const history = useHistory();

  const { title, path } = props;
  return (
    <Box className={classes.root}>
      <Typography variant="h4" component="h2">
        {title}
      </Typography>
      <Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push(path)}
        >
          New User
        </Button>
      </Box>
    </Box>
  );
};

export default PageHeader;
