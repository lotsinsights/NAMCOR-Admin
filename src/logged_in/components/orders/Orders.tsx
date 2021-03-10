import React, { useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import SearchField from "../../../shared/components/SearchField";
import MobxInvoiceStore from "../../../shared/stores/InvoiceStore";
import { Button } from "@material-ui/core";
import InvoiceTableColumn from "../../../shared/interfaces/InvoiceTableColumn";
import MenuComp from "../../../shared/components/MenuComp";
import OrdersTable from "./OrdersTable";
import PageToolbar from "../../../shared/components/PageToolbar";
import { useHistory } from "react-router-dom";
import { invoices, orders } from "../../dummy_data/dummy_data";
import OrderTableColumn from "../../../shared/interfaces/OrderTableColumn";
import OrderMenuComp from "./OrderMenuComp";
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
const columns: OrderTableColumn[] = [
  { id: "status", label: "", minWidth: 70 },
  { id: "customerName", label: "Customer Name", minWidth: 170 },
  { id: "orderNumber", label: "Order Number", minWidth: 170 },
  { id: "issueDate", label: "Invoice Issue Date", minWidth: 170 },
  { id: "dueDate", label: "Invoice Due Date", minWidth: 170 },
];

const Orders = () => {
  const classes = useStyles();
  const store = MobxInvoiceStore;
  const activeAccordionStore = MobxActiveSalesAccordionStore;
  const history = useHistory();

  useEffect(() => {
    document.title = "NAMCOR - Orders";
    // Setting the sales and purchase details to orders
    activeAccordionStore.setActiveStage("sales");
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
        title="Orders"
        buttons={
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/admin/create-product")}
          >
            + New Order
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
        <OrdersTable columns={columns} rows={orders}>
          <OrderMenuComp
            onViewOrder={() => history.push("/admin/sales-purchase-details")}
          />
        </OrdersTable>
      </Box>
    </Box>
  );
};

export default Orders;
