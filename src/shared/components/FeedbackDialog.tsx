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
  })
);

const FeedbackDialog = observer(() => {
  const classes = useStyles();
  const [feedbackStore] = useState(() => MobxFeedbackDialogStore);
  const radioGroupRef = React.useRef<HTMLElement>(null);

  const handleClose = () => {
    feedbackStore.closeFeedbackDialog();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setValue((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <Dialog
        open={feedbackStore.isFeedbackDialogOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Give Feedback</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To update changes, please give feedback or reasons for your actions.
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
          {/* <Box>
            <Typography
              className={classes.sectionHeader}
              variant="body1"
              component="p"
            >
              Why are you converting to purchase order?
            </Typography>
            <RadioGroup
              ref={radioGroupRef}
              aria-label="reasons"
              name="reasons"
              onChange={handleChange}
            >
              {options.map((option) => (
                <FormControlLabel
                  value={option}
                  key={option}
                  control={<Radio color="primary" />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </Box> */}

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
              id="feedback"
              label="Feedback"
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
            Convert to purchase order
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});

export default FeedbackDialog;
