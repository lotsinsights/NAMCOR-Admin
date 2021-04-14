import React, { useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import PageToolbar from "../../../../shared/components/PageToolbar";
import SearchField from "../../../../shared/components/SearchField";
import Order from "../../../../shared/interfaces/Order";
import OrderTableColumn from "../../../../shared/interfaces/OrderTableColumn";
import { db } from "../../../../shared/services/firebase";
import MobxActiveSalesAccordionStore from "../../../../shared/stores/ActiveSalesAccordionStore";
import MobxInvoiceStore from "../../../../shared/stores/InvoiceStore";
import OrderMenuComp from "../OrderMenuComp";
import OrdersTable from "../OrdersTable";
import EnhancedOrderTable from "../sales/EnhancedOrderTable";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3, 10),
  },
  flexCenter: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  box: {
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

const PurchaseOrders = () => {
  const classes = useStyles();
  const store = MobxInvoiceStore;
  const activeAccordionStore = MobxActiveSalesAccordionStore;
  const history = useHistory();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    document.title = "NAMCOR - Purchase Orders";
    // Setting the sales and purchase details to orders
    activeAccordionStore.setActiveStage("sales");
    // Get orders
    getOrders();
    return () => {};
  }, []);

  const getOrders = async () => {
    // Get purchase orders
    const $db = await db.collection("purchaseOrders");
    return $db.onSnapshot((querySnapshot: any) => {
      const docs = querySnapshot.docs.map((doc: any) => {
        return { id: doc.id, ...doc.data() };
      });
      setOrders(docs);
    });
  };

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
        title="Purchase orders"
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
          data={orders}
          feature={"customerName"}
          onChange={(event: any, value: any) =>
            handleSearchChange(event, value)
          }
        />
      </Box>

      {/* <Box className={classes.box}>
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

      {/* <Box className={classes.box}>
        <OrdersTable columns={columns} rows={orders}>
          <OrderMenuComp
            onViewOrder={() => history.push("/admin/sales-purchase-details")}
          />
        </OrdersTable>
      </Box> */}

      <Box className={classes.box}>
        <EnhancedOrderTable
          title={"Purchase Orders"}
          onViewOrder={console.log}
          data={orders}
        />
      </Box>
    </Box>
  );
};

export default PurchaseOrders;
