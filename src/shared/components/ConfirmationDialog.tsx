import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { observer } from "mobx-react";
import { db } from "../services/firebase";

const DeleteConfirmationDialog = observer((props: any) => {
  const { store } = props;

  const handleDisagree = () => {
    store.closeDeleteConfirmationDialog();
    store.setProductTobeDeleted("", "");
  };

  const handleAgree = async () => {
    const collectionName = store.getProductTobeDeleted.collectionName;
    const documentID = store.getProductTobeDeleted.documentID;
    if (collectionName && documentID) {
      const $db = await db
        .collection(store.getProductTobeDeleted.collectionName)
        .doc(store.getProductTobeDeleted.documentID);
      $db
        .delete()
        .then(() => console.log("Deleted"))
        .catch(() => console.log("Deleted"));
    }

    store.closeDeleteConfirmationDialog();
  };

  return (
    <Dialog
      open={store.openDeleteConfirmation}
      onClose={() => store.closeDeleteConfirmationDialog()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Delete this item?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Delete this item?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDisagree} color="primary">
          Disagree
        </Button>
        <Button onClick={handleAgree} color="primary" autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
});

export default DeleteConfirmationDialog;
