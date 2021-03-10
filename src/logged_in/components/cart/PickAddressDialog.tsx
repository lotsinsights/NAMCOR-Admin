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
import { addresses } from "../../dummy_data/dummy_data";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3, 10),
  },
}));

const PickAddressDialog = observer((props: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const store = props.store;
  const open = store.openPickAddressDialog;
  // const content = store.getContent;
  // const { name, description, thumbnail } = content;

  const handleClose = () => {
    // Close pick address dialog
    store.setClosePickAddressDialog();
  };

  const handleNewAddress = () => {
    // Close pick address dialog
    store.setClosePickAddressDialog();
    // Open the input address dialog
    store.setOpenInputAddressDialog();
  };
  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="product-details">Choose Address of Delivery</DialogTitle>
      <DialogContent>
        {addresses.map((address, index) => (
          <AddressOptionCard key={index} address={address} />
        ))}
      </DialogContent>

      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary" variant="text">
          Close
        </Button>
        <Button
          onClick={handleNewAddress}
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

export default PickAddressDialog;
