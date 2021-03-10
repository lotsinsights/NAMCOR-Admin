import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Box, Button } from "@material-ui/core";
import { AccordionActions } from "@material-ui/core";
import {
  CancelOutlined,
  CloudUploadOutlined,
  EditOutlined,
  UpdateOutlined,
} from "@material-ui/icons";
import AttachedDocument from "../AttachedDocument";

interface Props {
  expanded: any;
  onChange: (event: any, isExpanded: any) => void;
  accordionName: string;
  classes: any;
}

const PurchaseOrderAccordion = (props: Props) => {
  const { expanded, accordionName, onChange, classes } = props;

  return (
    <Accordion
      expanded={expanded === accordionName}
      onChange={(e) => onChange(e, accordionName)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel4bh-content"
        id="panel4bh-header"
      >
        <Typography className={classes.heading}>Purchase order</Typography>
        <Typography className={classes.secondaryHeading}>
          All documents related to purchase orders are here
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
        >
          Update status
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
          startIcon={<EditOutlined />}
        >
          Edit
        </Button>
        <Button
          variant="text"
          color="default"
          className={classes.button}
          startIcon={<CancelOutlined />}
        >
          Cancel Order
        </Button>
      </AccordionActions>
    </Accordion>
  );
};

export default PurchaseOrderAccordion;
