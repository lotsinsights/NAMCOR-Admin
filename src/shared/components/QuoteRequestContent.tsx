import { useEffect } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(4),
    },
    button: {
      margin: theme.spacing(1),
    },
    table: {
      minWidth: 650,
    },
    tableContainer: {
      border: "1px solid",
      borderColor: theme.palette.grey[300],
      borderRadius: 4,
    },
  })
);

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const QuoteRequestContent = () => {
  const classes = useStyles();
  const rows = [
    createData("Petrol", 15900, 6.0, 16.2, 4.0),
    createData("Paraffin", 23752, 9.0, 9, 4.3),
    createData("Diesel", 26200, 16.0, 15, 6.0),
    createData("Petrol (High octane)", 305, 3.7, 18, 4.3),
    createData("Butane", 356000, 16.0, 32, 3.9),
  ];

  useEffect(() => {
    document.title = "NAMCOR - Sales and Purchase Details";
    return () => {};
  }, []);

  return (
    <Card variant="outlined" className={classes.root}>
      {/* Request metadata */}
      <CardContent>
        <Typography variant="button" color="textSecondary" component="p">
          Summary
        </Typography>
        <Box>
          <Typography variant="body1" component="p">
            Created on: <strong>12 Nov 2020</strong>
          </Typography>
          <Typography variant="body1" component="p">
            Approved on: <strong>13 Nov 2020</strong>
          </Typography>
          <Typography variant="body1" component="p">
            Quotation: <strong>Missing</strong>
          </Typography>
        </Box>
      </CardContent>
      {/* Company details */}
      <CardContent>
        <Typography variant="button" color="textSecondary" component="p">
          Company Details
        </Typography>
        {/* <hr /> */}
        <Box>
          <Typography variant="body1" component="p">
            15 Luther Street, Windhoek
          </Typography>
          <Typography variant="body1" component="p">
            061 205 4111
          </Typography>
        </Box>
      </CardContent>
      {/* Request body */}
      <CardContent>
        <Typography variant="button" color="textSecondary" component="p">
          Requested Items
        </Typography>
        {/* <hr /> */}
        <Box>
          <TableContainer className={classes.tableContainer} component={"div"}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell align="right">Item number</TableCell>
                  <TableCell align="right">Quantity&nbsp;(kl)</TableCell>
                  <TableCell align="right">Price per litre&nbsp;(N$)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default QuoteRequestContent;
