import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CreateInvoiceTable from "./CreateInvoiceTable";
import { addresses } from "../../dummy_data/dummy_data";

const InvoiceContent = (props: any) => {
  const { classes } = props;

  return (
    <Box className={classes.accordion}>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography variant="body2" component="div">
                {addresses[0]}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" component="div">
                {addresses[1]}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>

        <hr />

        <CardContent>
          <CreateInvoiceTable />
        </CardContent>
      </Card>
    </Box>
  );
};

export default InvoiceContent;
