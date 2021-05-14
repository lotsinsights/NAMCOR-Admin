import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles, Theme } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    width: "100%",
    marginBottom: 12,
  },
  accordion: {
    boxShadow: "none",
    background: "none",
    border: "1px solid #ccc",
  },
  accordionContent: {
    backgroundColor: "#fff",
    paddingTop: theme.spacing(4),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
  },
  invoiceDetails: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "flex-end",
    "& > *": {
      marginBottom: 20,
    },
  },
  span: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: "1rem",
  },
  companyBrand: {
    border: "1px dashed #ccc",
    padding: theme.spacing(2, 2),
    borderRadius: 2,
    // width: "30em",
    textAlign: "center",
    color: theme.palette.grey[500],
    fontSize: ".9rem",
    transition: ".3s ease-in all",
    "&:hover": {
      backgroundColor: "#eee",
      cursor: "pointer",
    },
  },
  brandInputLabel: {
    width: "80%",
  },
  brand: {
    display: "none",
  },
}));

const CompanyDetails = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Business address and contact details, title, summary, and logo
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionContent}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Box className={classes.brandInputLabel}>
                <label htmlFor="brand">
                  <Typography className={classes.companyBrand}>
                    <span className={classes.span}>Browse</span>
                    <br />
                    Maximum 5MB in size. <br />
                    JPG, PNG, or GIF formats. <br />
                    Recommended size: 300 x 200 pixels.
                  </Typography>
                </label>

                <input
                  className={classes.brand}
                  type="file"
                  name="brand"
                  id="brand"
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box style={{ textAlign: "right" }}>
                <form className={classes.invoiceDetails} autoComplete="on">
                  <TextField
                    size="medium"
                    label="Invoice number"
                    variant="outlined"
                    defaultValue="Invoice"
                  />
                  <TextField
                    size="small"
                    label="Summary"
                    variant="outlined"
                    placeholder="Summary(e.g. Project name, Invoice)"
                  />
                </form>
                <Typography>
                  Kosha <br />
                  Namibia <br />
                  P.O.Box 246
                </Typography>
                <Button variant="text" color="primary">
                  Edit company address
                </Button>
              </Box>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CompanyDetails;
