import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Box, Button } from "@material-ui/core";
import { AccordionActions } from "@material-ui/core";
import {
  CloudUploadOutlined,
  CommentOutlined,
  DeleteOutlined,
  UpdateOutlined,
} from "@material-ui/icons";
import AttachedDocument from "../AttachedDocument";
import MobxFeedbackDialogStore from "../../stores/FeedbackDialogStore";
import MobxFileUploadDialogStore from "../../stores/FileUploadDialogStore";

interface Props {
  expanded: any;
  onChange: (event: any, isExpanded: any) => void;
  accordionName: string;
  classes: any;
}

const FuelOrderAccordion = (props: Props) => {
  const { expanded, accordionName, onChange, classes } = props;

  const feebackStore = MobxFeedbackDialogStore;
  const fileUploadStore = MobxFileUploadDialogStore;

  const giveFeedback = () => {
    feebackStore.openFeedbackDialog();
    console.warn("Remove this function from component");
  };

  const uploadFiles = () => {
    fileUploadStore.openFileUploadDialog();
    console.warn("Remove this function from component");
  };

  return (
    <Accordion
      expanded={expanded === accordionName}
      onChange={(e) => onChange(e, accordionName)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel-${accordionName}-content`}
        id={`panel-${accordionName}-header`}
      >
        <Typography className={classes.heading}>Fuel order</Typography>
        <Typography className={classes.secondaryHeading}>
          All documents related to fuel orders are here
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        {/* Documents */}
        <Typography variant="button">Documents</Typography>
        <Box className={classes.attachments}>
          <AttachedDocument />
          <AttachedDocument />
        </Box>
      </AccordionDetails>
      <AccordionActions className={classes.accordionActions}>
        <Button
          variant="text"
          color="default"
          className={classes.button}
          startIcon={<UpdateOutlined />}
          onClick={giveFeedback}
        >
          Update status
        </Button>
        <Button
          variant="text"
          color="default"
          className={classes.button}
          startIcon={<UpdateOutlined />}
        >
          Update tracking
        </Button>
        <Button
          variant="text"
          color="default"
          className={classes.button}
          startIcon={<CloudUploadOutlined />}
          onClick={uploadFiles}
        >
          Upload
        </Button>
        <Button
          variant="text"
          color="default"
          className={classes.button}
          startIcon={<CommentOutlined />}
        >
          Comments
        </Button>
        <Button
          variant="text"
          color="default"
          className={classes.button}
          startIcon={<DeleteOutlined />}
        >
          Delete
        </Button>
      </AccordionActions>
    </Accordion>
  );
};

export default FuelOrderAccordion;
