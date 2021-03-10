import { makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import { DeleteOutlined, MailOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1),
  },
}));

const MsgOptions = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <IconButton aria-label="delete" size="small">
        <DeleteOutlined fontSize="small" />
      </IconButton>
      <IconButton aria-label="mark as unread" size="small">
        <MailOutlined fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default MsgOptions;
