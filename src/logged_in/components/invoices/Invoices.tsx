import React, { useCallback, useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import SearchField from "../../../shared/components/SearchField";
import MobxInvoiceStore from "../../../shared/stores/InvoiceStore";
import { Button } from "@material-ui/core";
import InvoiceTableColumn from "../../../shared/interfaces/InvoiceTableColumn";
import InvoiceTable from "./InvoiceTable";
import MenuComp from "../../../shared/components/MenuComp";
import { useHistory } from "react-router-dom";
import PageToolbar from "../../../shared/components/PageToolbar";
import UploadOrBuildInvoiceDialog from "./UploadOrBuildInvoiceDialog";
import { invoices } from "../../dummy_data/dummy_data";
import InvoiceMenuComp from "./InvoiceMenuComp";
import MobxActiveSalesAccordionStore from "../../../shared/stores/ActiveSalesAccordionStore";

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
  { id: "status", label: "", minWidth: 50 },
  { id: "customerName", label: "Customer Name", minWidth: 170 },
  { id: "invoiceNumber", label: "Invoice Number", minWidth: 170 },
  { id: "issueDate", label: "Invoice Issue Date", minWidth: 170 },
  { id: "dueDate", label: "Invoice Due Date", minWidth: 170 },
];

const Invoices = () => {
  const classes = useStyles();
  const store = MobxInvoiceStore;
  const history = useHistory();
  const activeAccordionStore = MobxActiveSalesAccordionStore;

  // New invoice
  const [uploadOrBuild, setuploadOrBuild] = useState(false);
  const [selectedValue, setselectedValue] = useState<string | null>(null);

  useEffect(() => {
    document.title = "NAMCOR - Invoices";
    // Setting the sales and purchase details to invoices
    activeAccordionStore.setActiveStage("invoices");
    return () => {};
  }, []);

  // Search change handler
  const handleSearchChange = (event: any, value: any) => {
    setSingleProductData(value);
  };

  // View single product data
  const setSingleProductData = (value: any) => {
    if (value) {
      store.setOpen();
    }
  };

  const onClose = (value: string | null) => {
    setuploadOrBuild(false);
    if (value === "Build") {
      history.push("/admin/create-invoice");
    } else if (value === "Upload") {
      alert("Upload");
    } else {
    }
  };

  return (
    <Box className={classes.root}>
      <PageToolbar
        title="Invoices"
        buttons={
          <Button
            variant="contained"
            color="primary"
            onClick={() => setuploadOrBuild(true)}
          >
            + New Invoice
          </Button>
        }
      />

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
          <InvoiceMenuComp
            onViewInvoice={() => history.push("/admin/sales-purchase-details")}
          />
        </InvoiceTable>
      </Box>

      <UploadOrBuildInvoiceDialog
        open={uploadOrBuild}
        selectedValue={selectedValue}
        onClose={onClose}
      />
    </Box>
  );
};

export default Invoices;
