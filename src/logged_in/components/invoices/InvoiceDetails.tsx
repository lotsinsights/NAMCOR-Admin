import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React, { useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionActions from "@material-ui/core/AccordionActions";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3, 10),
  },
  flexCenter: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  marginTop: {
    marginTop: "50px",
  },

  //   dspFlex: {
  //     display: "flex",
  //     justifyContent: "flex-end",
  //   },

  margins: {
    margin: theme.spacing(0, 2),
  },
  accordion: {
    width: "100%",
  },
  accordionContent: {
    display: "block",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

interface Props {}

const InvoiceDetails = () => {
  const classes = useStyles();

  useEffect(() => {
    document.title = "NAMCOR - Invoice 2091dfs3";
    return () => {};
  }, []);

  return (
    <Box className={classes.root}>
      <Typography variant="h4" component="h2">
        Invoice: invoice1
      </Typography>

      <div className={classes.marginTop}></div>

      <Box className={classes.accordion}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Customer Details
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionContent}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Invoice Details</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionContent}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <iframe
              title="Invoice"
              src="http://www.africau.edu/images/default/sample.pdf"
              width="100%"
              height="500px"
            ></iframe>
          </AccordionDetails>
          <Divider />
          <AccordionActions>
            <Button size="small" variant="contained" color="primary">
              Print Invoice
            </Button>
            <Button size="small" variant="contained" color="primary">
              Download Invoice
            </Button>
          </AccordionActions>
        </Accordion>
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
            <iframe
              title="Proof Of Payment"
              src="http://www.africau.edu/images/default/sample.pdf"
              width="100%"
              height="500px"
            ></iframe>
          </AccordionDetails>
          <Divider />
          <AccordionActions>
            <Button size="small" variant="contained" color="primary">
              Upload Proof of Payment
            </Button>
          </AccordionActions>
        </Accordion>
      </Box>
    </Box>
  );
};

export default InvoiceDetails;
