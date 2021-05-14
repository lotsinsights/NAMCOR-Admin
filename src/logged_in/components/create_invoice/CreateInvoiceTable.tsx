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
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { DeleteOutlined } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Add from "@material-ui/icons/Add";

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

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: "#EEE",
      // color: theme.palette.common.white,
      borderBottom: 0,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRowCell = withStyles((them: Theme) =>
  createStyles({
    body: {
      borderBottom: 0,
      backgroundColor: "#f9f9f9",
      fontSize: 14,
    },
  })
)(TableCell);

const CreateInvoiceTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={"div"}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell>Items</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Fees&nbsp;(N$)</StyledTableCell>
            <StyledTableCell align="right">Amount&nbsp;(N$)</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <StyledTableRowCell component="th" scope="row">
              1
            </StyledTableRowCell>
            <StyledTableRowCell
              component="th"
              scope="row"
              style={{ borderBottom: 0 }}
            >
              <Autocomplete
                id="combo-box-demo"
                options={therapySessions}
                getOptionLabel={(option: any) => option.title}
                freeSolo
                style={{ width: 300 }}
                renderInput={(params: any) => (
                  <TextField {...params} size="small" variant="outlined" />
                )}
              />
            </StyledTableRowCell>
            <StyledTableRowCell align="right" style={{ borderBottom: 0 }}>
              <TextField
                className={classes.numberTextField}
                variant="outlined"
                size="small"
                type="number"
                defaultValue={1}
              />
            </StyledTableRowCell>
            <StyledTableRowCell align="right" style={{ borderBottom: 0 }}>
              <TextField
                className={classes.numberTextField}
                variant="outlined"
                size="small"
                type="number"
                defaultValue={"row.calories"}
              />
            </StyledTableRowCell>
            <StyledTableRowCell align="right" style={{ borderBottom: 0 }}>
              60.00
            </StyledTableRowCell>
            <StyledTableRowCell align="right" style={{ borderBottom: 0 }}>
              <IconButton aria-label="delete" color="primary">
                <DeleteOutlined fontSize="small" />
              </IconButton>
            </StyledTableRowCell>
          </TableRow>
          <TableRow>
            <StyledTableRowCell
              component="th"
              scope="row"
              style={{ borderBottom: 0 }}
            >
              2
            </StyledTableRowCell>
            <StyledTableRowCell
              component="th"
              scope="row"
              style={{ borderBottom: 0 }}
            >
              <Autocomplete
                id="combo-box-demo"
                options={therapySessions}
                getOptionLabel={(option: any) => option.title}
                freeSolo
                style={{ width: 300 }}
                renderInput={(params: any) => (
                  <TextField {...params} size="small" variant="outlined" />
                )}
              />
            </StyledTableRowCell>
            <StyledTableRowCell align="right" style={{ borderBottom: 0 }}>
              <TextField
                className={classes.numberTextField}
                variant="outlined"
                size="small"
                type="number"
                defaultValue={1}
              />
            </StyledTableRowCell>
            <StyledTableRowCell align="right" style={{ borderBottom: 0 }}>
              <TextField
                className={classes.numberTextField}
                variant="outlined"
                size="small"
                type="number"
                defaultValue={"row.calories"}
              />
            </StyledTableRowCell>
            <StyledTableRowCell align="right" style={{ borderBottom: 0 }}>
              120.00
            </StyledTableRowCell>
            <StyledTableRowCell align="right" style={{ borderBottom: 0 }}>
              <IconButton aria-label="delete" color="primary">
                <DeleteOutlined fontSize="small" />
              </IconButton>
            </StyledTableRowCell>
          </TableRow>
        </TableBody>
      </Table>
      <Box className={classes.dspFlex}>
        <Button
          // className={classes.addButton}
          variant="outlined"
          // color="primary"
          size="small"
          startIcon={<Add />}
        >
          Add an Item
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
