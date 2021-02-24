import React, { Children, cloneElement, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Product from "../interfaces/Product";
import ProductTableColumn from "../interfaces/ProductTableColumn";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
  },
  container: {
    // maxHeight: 1000,
  },
  dspFlex: {
    display: "flex",
    justifyContent: "flex-end",
  },

  margins: {
    margin: theme.spacing(0, 2),
  },
}));

interface Props<T, C> {
  columns: C[];
  rows: T[];
  onViewProduct?: any;
  children?: any;
}

type columnDefaultProperties<T> = {
  id: keyof T;
  minWidth?: number;
  label: string;
  align?: "left" | "right" | "inherit" | "center" | "justify" | undefined;
};

export default function TableComp<
  T extends { id: string },
  C extends columnDefaultProperties<T>
>(props: Props<T, C>) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { columns, rows } = props;

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  // key={column.id!}
                  key={index}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell
                key={"action"}
                align={"right"}
                style={{ minWidth: 170 }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: T) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column, index) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          // key={column.id}
                          key={index}
                          align={column.align}
                        >
                          {value}
                        </TableCell>
                      );
                    })}
                    <TableCell
                      style={{ minWidth: 300 }}
                      key={"actions"}
                      align={"right"}
                    >
                      {cloneElement(Children.only(props.children), {
                        row: row,
                      })}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
