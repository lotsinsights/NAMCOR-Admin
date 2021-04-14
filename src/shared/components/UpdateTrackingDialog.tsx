import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MobxFeedbackDialogStore from "../stores/FeedbackDialogStore";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { observer } from "mobx-react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import TrackingTimeline from "./TrackingTimeline";
import MobxTrackingDialogStore from "../stores/TrackingDialogStore";
import { Paper } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";

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
    sectionHeaderWithoutTopMargin: {
      marginBottom: 10,
      fontWeight: 600,
    },
    addCheckpointButton: {
      marginTop: 20,
      marginRight: 10,
    },
    paper: {
      padding: 20,
      //   marginTop: 30,
    },
  })
);

const UpdateTrackingDialog = observer(() => {
  const classes = useStyles();
  const [trackingStore] = useState(() => MobxTrackingDialogStore);

  // States
  const [state, setState] = useState(false);

  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.checked);
  };

  const handleClose = () => {
    trackingStore.closeTrackingDialog();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setValue((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <Dialog
        open={trackingStore.isTrackingDialogOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Update Tracking</DialogTitle>
        <DialogContent>
          <Box>
            <Typography
              className={classes.sectionHeaderWithoutTopMargin}
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
                // action={
                //   <IconButton aria-label="settings">
                //     <MoreVertIcon />
                //   </IconButton>
                // }
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
              Manage checkpoints
            </Typography>
            <Paper elevation={1} className={classes.paper}>
              <TextField
                autoFocus
                margin="dense"
                id="checkpoint_title"
                label="Check point"
                type="text"
                variant="outlined"
                fullWidth
              />
              <TextField
                margin="dense"
                id="time"
                label="Estimated arrival time"
                type="datetime"
                variant="outlined"
                fullWidth
              />
              <TextField
                multiline
                rows={3}
                margin="dense"
                id="description"
                label="Description"
                type="text"
                variant="outlined"
                fullWidth
              />

              <Box>
                <FormControlLabel
                  value={state}
                  control={
                    <Switch
                      checked={state}
                      onChange={handleToggleChange}
                      color="primary"
                      name="Checked"
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />
                  }
                  label="Checkpoint reached"
                  labelPlacement="start"
                />
              </Box>

              <Button
                className={classes.addCheckpointButton}
                variant="text"
                color="primary"
              >
                Clear
              </Button>
              <Button
                className={classes.addCheckpointButton}
                variant="contained"
                color="primary"
              >
                Add check point
              </Button>
            </Paper>
          </Box>

          <Box>
            <Typography
              className={classes.sectionHeader}
              variant="body1"
              component="p"
            >
              Timeline
            </Typography>
            <TrackingTimeline />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" variant="contained">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});

export default UpdateTrackingDialog;
