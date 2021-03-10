import React, { useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import SearchField from "../../../shared/components/SearchField";
import MobxInvoiceStore from "../../../shared/stores/InvoiceStore";
import InvoiceTableColumn from "../../../shared/interfaces/InvoiceTableColumn";
import MenuComp from "../../../shared/components/MenuComp";
import RequestsTable from "./RequestsTable";
import Button from "@material-ui/core/Button";
import PageToolbar from "../../../shared/components/PageToolbar";
import { useHistory } from "react-router-dom";
import { quote_request } from "../../dummy_data/dummy_data";
import QuoteRequestTableColumn from "../../../shared/interfaces/QuoteRequestTableColumn";
import QuoteRequestMenuComp from "./QuoteRequestMenuComp";
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
const columns: QuoteRequestTableColumn[] = [
  { id: "status", label: "", minWidth: 50 },
  { id: "customerName", label: "Customer Name", minWidth: 170 },
  { id: "requestNumber", label: "Request Number", minWidth: 170 },
  { id: "issueDate", label: "Request Issue Date", minWidth: 170 },
  { id: "dueDate", label: "Request Due Date", minWidth: 170 },
];

const QouteRequests = () => {
  const classes = useStyles();
  const store = MobxInvoiceStore;
  const activeAccordionStore = MobxActiveSalesAccordionStore;
  const history = useHistory();

  useEffect(() => {
    document.title = "NAMCOR - Requests";
    // Setting the sales and purchase details to invoices
    activeAccordionStore.setActiveStage("requests");
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
      <PageToolbar
        title="Quote Requests"
        buttons={
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/admin/create-product")}
          >
            + New Quote Request
          </Button>
        }
      />

      <Box className={classes.flexCenter}>
        <SearchField
          data={quote_request}
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
        <RequestsTable columns={columns} rows={quote_request}>
          <QuoteRequestMenuComp
            onViewRequest={() => history.push("/admin/sales-purchase-details")}
          />
        </RequestsTable>
      </Box>
    </Box>
  );
};

export default QouteRequests;
