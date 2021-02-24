import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import { observer } from "mobx-react";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import AddressOptionCard from "./AddressOptionCard";
import { addresses } from "../../dummy_data/Addresses";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2, 0),
      width: "100%",
    },
  },
}));

const AddressInputDialog = observer((props: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const store = props.store;
  // const content = store.getContent;
  // const { name, description, thumbnail } = content;

  const handleClose = () => {
    store.setCloseInputAddressDialog();
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={store.openInputAddressDialog}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="product-details">Delivery Address</DialogTitle>
      <DialogContent>
        <form className={classes.root} noValidate autoComplete="on">
          <TextField
            id="outlined-basic"
            label="Company Name"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="Town/city" variant="outlined" />

          <TextField
            id="outlined-basic"
            label="Postal Address"
            variant="outlined"
          />

          <TextField id="outlined-basic" label="Region" variant="outlined" />
          <TextField id="outlined-basic" label="Country" variant="outlined" />
          <TextField id="outlined-basic" label="Cellphone" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField
            id="standard-multiline-static"
            label="Comments"
            variant="outlined"
            multiline
            rows={4}
          />
        </form>
      </DialogContent>

      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary" variant="text">
          Close
        </Button>
        <Button
          onClick={handleClose}
          color="primary"
          variant="contained"
          autoFocus
        >
          Add New address
        </Button>
      </DialogActions>
    </Dialog>
  );
});

export default AddressInputDialog;
