import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import { observer } from "mobx-react";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3, 10),
  },
  flexCenter: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },

  thumbnail: {
    margin: theme.spacing(5, 2),
    width: 200,
    height: 200,
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
}));

const SingleProductDialog = observer((props: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const history = useHistory();

  const { store, onClose } = props;
  const content = store.getContent;
  const { name, description, status, price } = content;

  const onEdit = () => {
    store.setIsEditProduct();
    history.push("/admin/create-product");
    onClose(); //Close the modal
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={store.open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="product-details">Product Details</DialogTitle>
      <DialogContent>
        {/* <Box className={classes.flexCenter}>
          <img className={classes.thumbnail} src={thumbnail} alt="Alt" />
        </Box> */}
        <Typography variant="subtitle1" component="h6">
          Product Name
        </Typography>
        <DialogContentText>{name}</DialogContentText>

        <Typography variant="subtitle1" component="h6">
          Description
        </Typography>
        <DialogContentText>{description}</DialogContentText>

        <Typography variant="subtitle1" component="h6">
          Status
        </Typography>
        <DialogContentText>{status}</DialogContentText>

        <Typography variant="subtitle1" component="h6">
          Price per litre
        </Typography>
        <DialogContentText>N${price}.00</DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button autoFocus onClick={onClose} color="primary">
          Close
        </Button>
        <Button onClick={onEdit} color="primary" variant="contained" autoFocus>
          Edit
        </Button>
      </DialogActions>
    </Dialog>
  );
});

export default SingleProductDialog;
