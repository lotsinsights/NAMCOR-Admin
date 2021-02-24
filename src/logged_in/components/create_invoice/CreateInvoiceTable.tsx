import React from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Icon from "@material-ui/core/Icon";
import { AddCircleOutline } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) => ({
  table: {
    minWidth: 650,
  },
  numberTextField: {
    maxWidth: 100,
    textAlign: "right",
  },
  dspFlex: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(4, 4),
  },
  addButton: {
    borderRadius: 20,
  },
}));

const createData = (
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) => {
  return { name, calories, fat, carbs, protein };
};

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
];

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const CreateInvoiceTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell>Items</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Fees&nbsp;(N$)</StyledTableCell>
            <StyledTableCell align="right">Amount&nbsp;(N$)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {index}
              </TableCell>
              <TableCell component="th" scope="row">
                <Autocomplete
                  id="combo-box-demo"
                  options={therapySessions}
                  getOptionLabel={(option: any) => option.title}
                  style={{ width: 300 }}
                  renderInput={(params: any) => (
                    <TextField {...params} size="small" variant="outlined" />
                  )}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  className={classes.numberTextField}
                  variant="outlined"
                  size="small"
                  type="number"
                  defaultValue={1}
                />
              </TableCell>
              <TableCell align="right">
                <TextField
                  className={classes.numberTextField}
                  variant="outlined"
                  size="small"
                  type="number"
                  defaultValue={row.calories}
                />
              </TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box className={classes.dspFlex}>
        <Button
          className={classes.addButton}
          variant="contained"
          color="primary"
          size="large"
          endIcon={<AddCircleOutline />}
        >
          Add New Item
        </Button>
      </Box>
    </TableContainer>
  );
};

export default CreateInvoiceTable;

// Therapy sessions
const therapySessions = [
  { title: "Couple Therapy 1HR", year: 1994 },
  { title: "Couple Therapy 2HR", year: 1994 },
  { title: "Couple Therapy 1HR 30min", year: 1994 },
  { title: "Couple Therapy 30min", year: 1994 },
  { title: "Group Therapy 30min", year: 1972 },
  { title: "Group Therapy 2HR", year: 1972 },
  { title: "Organizational Therapy", year: 1974 },
  { title: "Child Therapy 1HR", year: 2008 },
  { title: "Child Therapy 30min", year: 1957 },
  { title: "Child Therapy 15min", year: 1993 },
];
