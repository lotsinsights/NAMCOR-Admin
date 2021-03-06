import React, { Fragment, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { observer } from "mobx-react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";
import { AddOutlined } from "@material-ui/icons";
import MobxFileUploadDialogStore from "../stores/FileUploadDialogStore";
import FileUploadTask from "./FileUploadTask";

const options = [
  "Account has enough credit",
  "Urgent order",
  "All documents are available",
  "Others",
];

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

const FileUploadDialog = observer(() => {
  const classes = useStyles();
  const [fileUploadStore] = useState(() => MobxFileUploadDialogStore);
  const collection = fileUploadStore.getCollectionName;
  const doc = fileUploadStore.getDocumentID;

  // Selected files
  const [files, setFiles] = useState<any>([]);

  const onFileChange = (e: any) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newFile = e.target.files[i];
      newFile["id"] = Math.random();
      // add an "id" property to each File object
      setFiles((prevState: any) => [...prevState, newFile]);
    }
  };

  const handleClose = () => {
    fileUploadStore.closeFileUploadDialog();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setValue((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <Dialog
        open={fileUploadStore.isFileUploadDialogOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Upload Files</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Give comments and name your files appropriately
          </DialogContentText>
          <Box>
            <Typography
              className={classes.sectionHeader}
              variant="body1"
              component="p"
            >
              Who is responsible?
            </Typography>
            <Card elevation={3}>
              <CardHeader
                avatar={
                  <Avatar aria-label="name" className={classes.avatar}>
                    S
                  </Avatar>
                }
                title="Silas Shongola"
                subheader="Finance"
              />
            </Card>
          </Box>

          <Box>
            <Typography
              className={classes.sectionHeader}
              variant="body1"
              component="p"
            >
              Files
            </Typography>
            {files &&
              files.map((file: any, index: number) => (
                <Fragment key={index}>
                  <FileUploadTask
                    file={file}
                    collection={collection}
                    doc={doc}
                  />
                </Fragment>
              ))}

            {/* Select files */}
            <Box className={classes.fileAdd}>
              <input
                // accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                onChange={onFileChange}
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<AddOutlined />}
                  component="span"
                >
                  Select files
                </Button>
              </label>
            </Box>
          </Box>

          <Box>
            <Typography
              className={classes.sectionHeader}
              variant="body1"
              component="p"
            >
              Comments
            </Typography>
            <TextField
              autoFocus
              multiline
              rows={4}
              margin="dense"
              id="file-comments"
              label="Comments"
              type="text"
              variant="outlined"
              fullWidth
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" variant="contained">
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});

export default FileUploadDialog;
