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
    details: {
      display: "flex",
      justifyContent: "space-between",
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

interface Props {
  requestedProducts: any;
}

const QuoteRequestContent = (props: Props) => {
  const classes = useStyles();
  const { requestedProducts: rows } = props;

  useEffect(() => {
    document.title = "NAMCOR - Sales and Purchase Details";
    return () => {};
  }, []);

  return (
    <Box className={classes.root}>
      {/* Request metadata */}
      <Box className={classes.details}>
        <Box>
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
        </Box>
        {/* Company details */}
        <Box>
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
        </Box>
      </Box>
      {/* Request body */}
      <Box>
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
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row: any) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.productName}
                    </TableCell>
                    <TableCell align="right">{row.id}</TableCell>
                    <TableCell align="right">{row.quantity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default QuoteRequestContent;
