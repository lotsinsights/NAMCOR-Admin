import { forwardRef, ReactElement, Ref, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import Box from "@material-ui/core/Box";
import { observer } from "mobx-react";
import MobxFileViewerDialogStore from "../stores/FileViewerDialogStore";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: "relative",
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    iframeContainer: {
      height: "100%",
    },
    iframe: {
      height: "100%",
      width: "100%",
    },
  })
);

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children?: ReactElement },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FileViewerDialog = observer(() => {
  const classes = useStyles();

  const [fileViewerStore] = useState(() => MobxFileViewerDialogStore);

  const handleClose = () => {
    fileViewerStore.closeFileViewerDialog();
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={fileViewerStore.isFileViewerDialogOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {fileViewerStore.getFileName}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Print
            </Button>
          </Toolbar>
        </AppBar>
        <Box className={classes.iframeContainer}>
          <iframe
            className={classes.iframe}
            title={fileViewerStore.getFileName}
            src={fileViewerStore.getFile}
          ></iframe>
        </Box>
      </Dialog>
    </div>
  );
});

export default FileViewerDialog;
