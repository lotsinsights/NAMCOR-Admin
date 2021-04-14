import React, { Component, useEffect, useState } from "react";
import { red } from "@material-ui/core/colors";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import EditableCardHeader from "./EditableCardHeader";
import LinearProgress from "@material-ui/core/LinearProgress";
import { $firebase, db, storage } from "../services/firebase";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    avatar: {
      backgroundColor: red[500],
    },
    sectionHeader: {
      marginTop: 30,
      marginBottom: 10,
      fontWeight: 600,
    },
    fileCard: {
      marginBottom: 10,
    },
    fileAdd: {
      textAlign: "center",
      marginTop: 20,
      marginBottom: 20,
    },
    input: {
      display: "none",
    },
  })
);

interface Props {
  file: any;
  collection: string;
  doc: string;
}

const UploadTask = (props: Props) => {
  const classes = useStyles();
  const { file, collection, doc } = props;

  const [progress, setProgress] = useState(0);
  const [uploadTask] = useState(
    storage.ref().child(`${collection}/${doc}/${file.name}`).put(file)
  );
  const [downloadURL, setdownloadURL] = useState("");

  useEffect(() => {
    upload();
    return () => {};
  }, []);

  const upload = () => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const $progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(Math.round(($progress + Number.EPSILON) * 100) / 100);

        switch (snapshot.state) {
          case "paused": // or 'firebase.storage.TaskState.PAUSED'
            console.log("Upload is paused");
            break;
          case "running": // or 'firebase.storage.TaskState.RUNNING'
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          setdownloadURL(url);
          updateDownloadURL({
            attachments: $firebase.firestore.FieldValue.arrayUnion({
              name: file.name,
              url: url,
            }),
          });
          console.log("File available at", url);
        });
      }
    );

    uploadTask.then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
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
    // If not done uploading,
    // Cancel upload (using UploadTask)
    console.warn("Warning, deleting file..");
    if (downloadURL)
      storage
        .refFromURL(downloadURL)
        .delete()
        .then((success) => console.log("Download: ", success))
        .catch((error) => console.log("Error: ", error));
    // Else if done uploading,
    // Delete from storage (using DownloadURL).
    console.warn("Cancelling file..");
    uploadTask.cancel();
  };

  return (
    <Box className={classes.fileCard}>
      <Card variant="outlined">
        <EditableCardHeader
          title={file.name}
          subheader="NAMPOWER"
          onDelete={onDelete}
        />
        <LinearProgress variant="determinate" value={progress} />
      </Card>
    </Box>
  );
};

const FileUploadTask = React.memo(UploadTask);
export default FileUploadTask;
