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

const AttachedDocument = () => {
  const classes = useStyles();
  const fileViewerStore = MobxFileViewerDialogStore;
  const fileSrc = "https://people.inf.elte.hu/miiqaai/elektroModulatorDva.pdf";
  const fileName = "Database systems";

  const viewFile = () => {
    fileViewerStore.setFile(fileSrc);
    fileViewerStore.setFileName(fileName);
    fileViewerStore.openFileViewerDialog();
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
          Company vision and mission statement
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
        >
          <DeleteOutlined fontSize="small" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default AttachedDocument;
