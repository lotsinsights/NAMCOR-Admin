import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { SendOutlined } from "@material-ui/icons";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { grey } from "@material-ui/core/colors";
// Quill
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.background.default,
    width: "100%",
  },
  card: {
    width: "100%",
  },
  cardAddress: {
    display: "flex",
    padding: theme.spacing(1),
    width: "100%",
    alignItems: "center",
  },
  cardContent: {
    display: "block",
    padding: theme.spacing(1),
  },
  input: {
    border: 0,
    height: 20,
    marginLeft: 10,
    width: "100%",
    minHeight: 35,
  },
  quill: {
    border: 0,
    width: "100%",

    "& .ql-editor": {
      minHeight: 200,
    },
    "& .ql-container.ql-snow": {
      border: 0,
    },
    "& .ql-toolbar.ql-snow": {
      border: 0,
      backgroundColor: grey[100],
      borderRadius: 5,
    },
  },
  hr: {
    margin: 0,
    display: "block",
    height: 1,
    border: 0,
    backgroundColor: grey[300],
  },
}));

const NewMessage = () => {
  const classes = useStyles();
  const [value, setValue] = useState("");

  return (
    <Box className={classes.root}>
      <Card className={classes.card} variant="outlined">
        <CardContent className={classes.cardAddress}>
          <Button color="primary" variant="contained">
            To
          </Button>
          <input className={classes.input} type="text" />
        </CardContent>
        <hr className={classes.hr} />
        <CardContent className={classes.cardAddress}>
          <Button color="primary" variant="text">
            CC
          </Button>
          <input className={classes.input} type="text" />
        </CardContent>
        <hr className={classes.hr} />
        <CardContent className={classes.cardAddress}>
          <Button color="primary" variant="text">
            BCC
          </Button>
          <input className={classes.input} type="text" />
        </CardContent>
        <hr className={classes.hr} />
        <CardContent className={classes.cardAddress}>
          <input
            className={classes.input}
            type="text"
            placeholder="Add a subject"
          />
        </CardContent>
        <hr className={classes.hr} />

        <CardContent className={classes.cardContent}>
          <ReactQuill
            className={classes.quill}
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </CardContent>

        <hr className={classes.hr} />

        <CardActions>
          <Button
            color="primary"
            variant="contained"
            endIcon={<SendOutlined />}
          >
            Send
          </Button>
          <Button color="primary" variant="text">
            Cancel
          </Button>
          {/* <IconButton aria-label="view" size="small">
            <AttachFileOutlined fontSize="small" />
          </IconButton>
          <IconButton aria-label="download" size="small">
            <DeleteOutlined fontSize="small" />
          </IconButton>
          <IconButton aria-label="mark as unread" size="small">
            <MailOutlined fontSize="small" />
          </IconButton> */}
        </CardActions>
      </Card>
    </Box>
  );
};

export default NewMessage;
