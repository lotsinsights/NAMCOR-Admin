import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  inline: {
    display: "inline",
  },
});

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string | null;
  onClose: (value: string | null) => void;
}

const UploadOrBuildInvoiceDialog = (props: SimpleDialogProps) => {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="Upload or build" open={open}>
      <DialogTitle id="uploadOrBuild">What do want to do?</DialogTitle>
      <List>
        <ListItem
          autoFocus
          button
          onClick={() => handleListItemClick("Upload")}
        >
          <ListItemText
            primary="Upload an invoice"
            secondary={
              "If you have a PDF/Word Document of the invoice already created somewhere"
            }
          />
        </ListItem>
        <ListItem autoFocus button onClick={() => handleListItemClick("Build")}>
          <ListItemText
            primary="Build a new invoice"
            secondary={
              "Create a new invoice using the templates provided on the system"
            }
          />
        </ListItem>
      </List>
    </Dialog>
  );
};

export default UploadOrBuildInvoiceDialog;
