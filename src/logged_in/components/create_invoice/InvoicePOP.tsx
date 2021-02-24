import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionActions from "@material-ui/core/AccordionActions";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

const InvoicePOP = (props: any) => {
  const { classes } = props;

  return (
    <Box className={classes.accordion}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Proof of Payment (1 File)
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionContent}>
          <Typography>Payment made with Nedbank, Date: 2019-09-03</Typography>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button size="small" variant="contained" color="primary">
            Upload Proof of Payment
          </Button>
        </AccordionActions>
      </Accordion>
    </Box>
  );
};

export default InvoicePOP;
