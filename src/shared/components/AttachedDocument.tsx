import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import { Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {
  DeleteOutlined,
  GetAppOutlined,
  VisibilityOutlined,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { $firebase, db, storage } from "../services/firebase";
import MobxFileViewerDialogStore from "../stores/FileViewerDialogStore";

const useStyles = makeStyles((theme: Theme) => ({
  dspPop: {
    margin: theme.spacing(1),
  },
  margin: {
    margin: 0,
  },
  name: {
    maxWidth: 250,
    lineHeight: "20px",
    height: "40px",
    overflow: "hidden",
  },
  content: {
    paddingBottom: 0,
  },
}));

interface Props {
  collectionName: string;
  documentID: string;
  fileName?: string;
  fileSrc?: string;
}

const AttachedDocument = (props: Props) => {
  const classes = useStyles();
  const fileViewerStore = MobxFileViewerDialogStore;

  const {
    collectionName: collection,
    documentID: doc,
    fileName = "Default file name",
    fileSrc = "www.google.com",
  } = props;

  const viewFile = () => {
    fileViewerStore.setFile(fileSrc);
    fileViewerStore.setFileName(fileName);
    fileViewerStore.openFileViewerDialog();
  };

  const updateDownloadURL = (data: any) => {
    db.collection(collection)
      .doc(doc)
      .set(data, { merge: true })
      .then(() => {
        console.log("Document successfully updated!");
      })
      .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  };

  const onDelete = () => {
    // Delete from storage (using DownloadURL).
    console.warn("Warning, deleting file..");
    if (fileSrc) {
      console.log("Filename: ", fileName, "\nURL: ", fileSrc);

      storage
        .refFromURL(fileSrc)
        .delete()
        .then((success) => {
          console.log("Deleted successfully");
        })
        .catch((error) => console.log("Error: ", error))
        .finally(() => {
          updateDownloadURL({
            attachments: $firebase.firestore.FieldValue.arrayRemove({
              name: fileName,
              url: fileSrc,
            }),
          });
        });
    }
  };

  return (
    <Card variant="outlined" className={classes.dspPop}>
      <CardContent className={classes.content}>
        <Typography
          className={classes.name}
          variant="body1"
          color="textSecondary"
          component="p"
        >
          {fileName}
        </Typography>
      </CardContent>

      <CardActions>
        <IconButton
          aria-label="download"
          size="small"
          className={classes.margin}
        >
          <GetAppOutlined fontSize="small" />
        </IconButton>
        <IconButton
          aria-label="view"
          size="small"
          className={classes.margin}
          onClick={viewFile}
        >
          <VisibilityOutlined fontSize="small" />
        </IconButton>
        <IconButton
          aria-label="download"
          size="small"
          className={classes.margin}
          onClick={onDelete}
        >
          <DeleteOutlined fontSize="small" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default AttachedDocument;
