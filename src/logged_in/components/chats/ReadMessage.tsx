import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {
  AddOutlined,
  ArchiveOutlined,
  DeleteOutlineOutlined,
  MailOutlined,
  PrintOutlined,
} from "@material-ui/icons";
import MessageContent from "./MessageContent";
import NewMessage from "./NewMessage";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    flexShrink: 1,
  },
  toolbar: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    justifyContent: "space-between",
    minHeight: 48,
  },
  content: {
    padding: theme.spacing(4, 6),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const ReadMessage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.toolbar}>
        <Box>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            startIcon={<AddOutlined />}
          >
            New message
          </Button>
        </Box>
        <Box>
          <Button
            className={classes.button}
            variant="text"
            startIcon={<MailOutlined />}
          >
            Mark all as read
          </Button>
          <Button
            className={classes.button}
            variant="text"
            startIcon={<DeleteOutlineOutlined />}
          >
            Delete
          </Button>
          <Button variant="text" startIcon={<ArchiveOutlined />}>
            Archive
          </Button>
          <Button
            className={classes.button}
            variant="text"
            startIcon={<PrintOutlined />}
          >
            Print
          </Button>
        </Box>
      </Box>
      <Box className={classes.content}>
        <MessageContent />
        {/* <NewMessage /> */}
      </Box>
    </Box>
  );
};

export default ReadMessage;
