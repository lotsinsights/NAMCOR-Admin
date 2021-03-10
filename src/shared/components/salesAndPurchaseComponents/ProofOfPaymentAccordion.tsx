import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Box, Button } from "@material-ui/core";
import { AccordionActions } from "@material-ui/core";
import {
  CloudUploadOutlined,
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

const ProofOfPaymentAccordion = (props: Props) => {
  const { expanded, accordionName, onChange, classes } = props;

  return (
    <Accordion
      expanded={expanded === accordionName}
      onChange={(e) => onChange(e, accordionName)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel6bh-content"
        id="panel6bh-header"
      >
        <Typography className={classes.heading}>Proof of Payments</Typography>
        <Typography className={classes.secondaryHeading}>
          All POP files are here
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
          Request for POP
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
      </AccordionActions>
    </Accordion>
  );
};

export default ProofOfPaymentAccordion;
