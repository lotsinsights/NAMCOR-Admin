import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionActions from "@material-ui/core/AccordionActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import ContainterComp from "../../../shared/components/ContainterComp";

const useFuelStyles = makeStyles((theme: Theme) => ({
  root: {},
}));

const useProductStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  status: {
    fontSize: theme.typography.pxToRem(10),
    textTransform: "uppercase",
    color: "#fff",
    padding: theme.spacing(0.2, 0.5),
    backgroundColor: "red",
    width: "fit-content",
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  details: {
    alignItems: "center",
    flexDirection: "column",
  },
  summary: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  column: {
    flexBasis: "33.33%",
  },
  summaryRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  detailsRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  hr: {
    borderBottom: "1px solid #ccc",
    width: "100%",
    margin: theme.spacing(2, 0),
  },
}));

const ProductDetails = [
  {
    item: "Purchase Price",
    price: "762.000",
  },
  {
    item: "Add: NAMCOR Margin",
    price: "50.000",
  },
  {
    item: "Less: Rebate",
    price: "-",
  },
  {
    item: "Add: Transport",
    price: "9.400",
  },
  {
    item: "Add: REM handling",
    price: "7.500",
  },
  {
    item: "Add: Overtime",
    price: "-",
  },
  {
    item: "Add: NAMCOR Stuff cost - Salaries",
    price: "-",
  },
];

const Product = () => {
  const classes = useProductStyles();

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1c-content"
        id="panel1c-header"
      >
        <div className={classes.summary}>
          <div className={classes.summaryRow}>
            <div className={classes.column}>
              <div>
                <Typography className={classes.secondaryHeading}>
                  Depot level: 30,000L
                </Typography>
              </div>
            </div>
            <div className={classes.column}>
              <div>
                <Typography className={classes.status}>
                  Awaiting Reviewal
                </Typography>
              </div>
            </div>
          </div>
          <div className={classes.summaryRow}>
            <div className={classes.column}>
              <Typography className={classes.heading}>ALL CUSTOMERS</Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.heading}>
                LSFO BUNKER PRICE: 0 - 50,000L
              </Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.heading}>
                Date: April 21
              </Typography>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails className={classes.details}>
        {ProductDetails.map((item) => (
          <div className={classes.detailsRow}>
            <Typography variant="body1">{item.item}</Typography>
            <Typography variant="body2">{item.price}</Typography>
          </div>
        ))}
        <div className={classes.hr}></div>
        {ProductDetails.map((item) => (
          <div className={classes.detailsRow}>
            <Typography variant="body1">{item.item}</Typography>
            <Typography variant="body2">{item.price}</Typography>
          </div>
        ))}
        <div className={classes.hr}></div>
        {ProductDetails.map((item) => (
          <div className={classes.detailsRow}>
            <Typography variant="body1">{item.item}</Typography>
            <Typography variant="body2">{item.price}</Typography>
          </div>
        ))}
      </AccordionDetails>
      <Divider />
      <AccordionActions>
        <Button size="small">Update Depot</Button>
        <Button size="small">Export</Button>
        <Button size="small">Cancel</Button>
        <Button size="small" color="primary">
          Edit
        </Button>
      </AccordionActions>
    </Accordion>
  );
};

const Fuel = () => {
  const classes = useFuelStyles();
  return (
    <ContainterComp>
      <div className={classes.root}>
        <Product />
        <Product />
        <Product />
      </div>
    </ContainterComp>
  );
};

export default Fuel;
