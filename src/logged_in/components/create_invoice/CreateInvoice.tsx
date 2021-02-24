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
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CompanyDetails from "./CompanyDetails";
import InvoiceContent from "./InvoiceContent";
import InvoicePOP from "./InvoicePOP";

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

  dspFlex: {
    display: "flex",
    justifyContent: "flex-end",
  },

  margins: {
    margin: theme.spacing(0, 2),
  },
  accordion: {
    width: "100%",
    marginBottom: 12,
  },
  accordionContent: {
    display: "block",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },

  //   Card styles
  card: {
    minWidth: 240,
    padding: theme.spacing(2, 4),
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

  paper: {
    padding: theme.spacing(2),
    // textAlign: "center",
    color: theme.palette.text.secondary,
  },

  // Invoice Table
}));

const CreateInvoice = () => {
  const classes = useStyles();

  useEffect(() => {
    document.title = "NAMCOR - Create Invoice";
    return () => {};
  }, []);

  return (
    <Box className={classes.root}>
      <Typography variant="h4" component="h2">
        Create Invoice
      </Typography>

      <CompanyDetails classes={classes} />

      <InvoiceContent classes={classes} />

      <InvoicePOP classes={classes} />
    </Box>
  );
};

export default CreateInvoice;
