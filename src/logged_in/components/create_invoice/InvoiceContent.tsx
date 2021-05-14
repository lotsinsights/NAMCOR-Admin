import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CreateInvoiceTable from "./CreateInvoiceTable";
import { addresses } from "../../dummy_data/dummy_data";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: Theme) => ({
  accordion: {
    width: "100%",
    marginBottom: 12,
  },
  card: {
    minWidth: 240,
    padding: theme.spacing(2, 4),
  },
  invoiceSummary: {
    display: "flex",
    justifyContent: "flex-end",
  },
  typography: {
    minWidth: 200,
    textAlign: "right",
  },
  invoiceDetails: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    "& > *": {
      marginBottom: 20,
    },
  },
}));

const InvoiceContent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.accordion}>
      <Card className={classes.card} variant="elevation">
        <CardContent>
          <Grid container spacing={7}>
            <Grid item xs={6}>
              <Typography variant="body2" component="div">
                {addresses[0]}
                <Button variant="text" color="primary">
                  Edit
                </Button>
                <Button variant="text" color="primary">
                  Choose different customer
                </Button>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <form
                className={classes.invoiceDetails}
                noValidate
                autoComplete="on"
              >
                <TextField
                  size="small"
                  label="Invoice number"
                  variant="outlined"
                />
                <TextField
                  size="small"
                  label="P.O./S.O. number"
                  variant="outlined"
                />

                <TextField
                  size="small"
                  label="Invoice date"
                  variant="outlined"
                />
                <TextField
                  size="small"
                  label="Invoice due"
                  variant="outlined"
                />
              </form>
            </Grid>
          </Grid>
        </CardContent>

        {/* <hr /> */}

        <CardContent>
          <CreateInvoiceTable />
        </CardContent>

        <CardContent className={classes.invoiceSummary}>
          <Box component={"table"}>
            <Box component={"tbody"}>
              <Box component={"tr"}>
                <Box component="td">
                  <Typography>Sub-total</Typography>
                </Box>
                <Box component="td" className={classes.typography}>
                  <Typography>$50.00</Typography>
                </Box>
              </Box>
              <Box component={"tr"}>
                <Box component="td">
                  <Typography variant="h6" component="p">
                    Total
                  </Typography>
                </Box>
                <Box component="td" className={classes.typography}>
                  <Typography variant="h6" component="p">
                    $65.00
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default InvoiceContent;
