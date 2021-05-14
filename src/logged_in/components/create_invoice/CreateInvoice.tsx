import Box from "@material-ui/core/Box";
import { useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InvoiceContent from "./InvoiceContent";
import PageToolbar from "../../../shared/components/PageToolbar";
import InvoicePOP from "./InvoicePOP";
import CompanyDetails from "./CompanyDetails";

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
    // justifyContent: "flex-end",
  },

  margins: {
    margin: theme.spacing(0, 2),
  },
  accordion: {
    width: "100%",
    marginBottom: 12,
  },
  accordionContent: {
    // display: "block",
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

  // POP
  dspPop: {
    margin: theme.spacing(1),
  },
}));

const CreateInvoice = () => {
  const classes = useStyles();

  useEffect(() => {
    document.title = "NAMCOR - Create Invoice";
    return () => {};
  }, []);

  return (
    <Box className={classes.root}>
      <PageToolbar
        title="Create an Invoice"
        buttons={
          <>
            <Button className={classes.margins} variant="text" color="primary">
              Save to Draft
            </Button>
            <Button
              variant="contained"
              color="primary"
              // onClick={() => history.push("/admin/products")}
            >
              Save and Send
            </Button>
          </>
        }
      />

      <CompanyDetails />
      <InvoiceContent />
      {/* <InvoicePOP classes={classes} /> */}
    </Box>
  );
};

export default CreateInvoice;
