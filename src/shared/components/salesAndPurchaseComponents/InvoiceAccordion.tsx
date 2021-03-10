import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Box, Button } from "@material-ui/core";
import { AccordionActions } from "@material-ui/core";
import {
  BuildOutlined,
  CloudUploadOutlined,
  DeleteOutlined,
  EditOutlined,
  SendOutlined,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import AttachedDocument from "../AttachedDocument";

interface Props {
  expanded: any;
  onChange: (event: any, isExpanded: any) => void;
  accordionName: string;
  classes: any;
}

const InvoiceAccordion = (props: Props) => {
  const { expanded, onChange, accordionName, classes } = props;

  return (
    <Accordion
      expanded={expanded === accordionName}
      onChange={(e) => onChange(e, accordionName)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel5bh-content"
        id="panel5bh-header"
      >
        <Typography className={classes.heading}>Invoice</Typography>
        <Typography className={classes.secondaryHeading}>
          All invoices are here
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
          startIcon={<SendOutlined />}
        >
          Send to finance
        </Button>
        <Button
          variant="text"
          color="default"
          className={classes.button}
          startIcon={<ThumbUpAltOutlined />}
        >
          Approve
        </Button>
        <Button
          variant="text"
          color="default"
          className={classes.button}
          startIcon={<ThumbDownAltOutlined />}
        >
          Reject
        </Button>
        <Button
          variant="text"
          color="default"
          className={classes.button}
          startIcon={<CloudUploadOutlined />}
        >
          Upload
        </Button>
        <Button
          variant="text"
          color="default"
          className={classes.button}
          startIcon={<BuildOutlined />}
        >
          Build
        </Button>
        <Button
          variant="text"
          color="default"
          className={classes.button}
          startIcon={<EditOutlined />}
        >
          Edit
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

export default InvoiceAccordion;
