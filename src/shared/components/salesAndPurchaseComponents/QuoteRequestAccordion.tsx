import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Box, Button } from "@material-ui/core";
import { AccordionActions } from "@material-ui/core";
import {
  CommentOutlined,
  DeleteOutlined,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import QuoteRequestContent from "../QuoteRequestContent";
import AttachedDocument from "../AttachedDocument";

interface Props {
  expanded: any;
  onChange: (event: any, isExpanded: any) => void;
  accordionName: string;
  classes: any;
}

const QuoteRequestAccordion = (props: Props) => {
  const { expanded, accordionName, onChange, classes } = props;

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
        <Typography className={classes.heading}>Quote Request</Typography>
        <Typography className={classes.secondaryHeading}>
          Request for quotation from customer
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        {/* Request details */}
        <Box>
          <Typography variant="button">Request Details</Typography>
          <QuoteRequestContent />
        </Box>
        {/* Request documents */}
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
          startIcon={<ThumbUpAltOutlined />}
        >
          Approve Request
        </Button>
        <Button
          variant="text"
          color="default"
          className={classes.button}
          startIcon={<ThumbDownAltOutlined />}
        >
          Reject Request
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

export default QuoteRequestAccordion;
