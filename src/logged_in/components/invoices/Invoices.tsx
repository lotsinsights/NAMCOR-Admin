import React, { useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import SearchField from "../../../shared/components/SearchField";
import { invoices } from "../../dummy_data/Invoices";
import MobxInvoiceStore from "../../../shared/stores/InvoiceStore";
import { Button } from "@material-ui/core";
import InvoiceTableColumn from "../../../shared/interfaces/InvoiceTableColumn";
import InvoiceTable from "./InvoiceTable";
import MenuComp from "../../../shared/components/MenuComp";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3, 10),
  },
  flexCenter: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  tableContainer: {
    marginTop: "50px",
  },

  dspFlex: {
    display: "flex",
    justifyContent: "flex-end",
  },

  margins: {
    margin: theme.spacing(0, 2),
  },
}));

// Table Component Properties
const columns: InvoiceTableColumn[] = [
  { id: "customerName", label: "Customer Name", minWidth: 170 },
  { id: "status", label: "Status", minWidth: 100 },
  { id: "invoiceNumber", label: "Invoice Number", minWidth: 170 },
  { id: "issueDate", label: "Invoice Issue Date", minWidth: 170 },
  { id: "dueDate", label: "Invoice Due Date", minWidth: 170 },
];

const Invoices = () => {
  const classes = useStyles();
  const store = MobxInvoiceStore;

  useEffect(() => {
    document.title = "NAMCOR - Invoices";
    return () => {};
  }, []);

  // Search change handler
  const handleSearchChange = (event: any, value: any) => {
    setSingleProductData(value);
  };

  // View single product data
  const setSingleProductData = (value: any) => {
    if (value) {
      // store.setSingleProductContent(value);
      store.setOpen();
    }
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h4" component="h2">
        Invoices
      </Typography>

      <Box className={classes.flexCenter}>
        <SearchField
          data={invoices}
          feature={"customerName"}
          onChange={(event: any, value: any) =>
            handleSearchChange(event, value)
          }
        />
      </Box>

      {/* <Box className={classes.tableContainer}>
        <TableFilter
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
          order={order}
          setOrder={setOrder}
          label={orderBy}
          setLabel={setOrderBy}
          arrayOfLabels={arrayOfLabels()}
        />
      </Box> */}

      <Box className={classes.tableContainer}>
        <InvoiceTable columns={columns} rows={invoices}>
          <MenuComp />
        </InvoiceTable>
      </Box>
    </Box>
  );
};

export default Invoices;
