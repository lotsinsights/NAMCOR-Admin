import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import SearchField from "../../../shared/components/SearchField";

import {
  getComparator,
  Order,
  stableSort,
} from "../../../shared/functions/TableSort";
import Product from "../../../shared/interfaces/Product";
import MobxProductStore from "../../../shared/stores/ProductStore";
import { useHistory } from "react-router-dom";
import PageToolbar from "../../../shared/components/PageToolbar";
import Button from "@material-ui/core/Button";
import { db } from "../../../shared/services/firebase";

import ErrorBoundary from "../../../shared/components/ErrorBoundary";
import ContainterComp from "../../../shared/components/ContainterComp";
import GroupedOrdersTable from "./GroupedOrdersTable";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // padding: theme.spacing(3, 10),
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

const GroupedOrders = () => {
  const classes = useStyles();
  // Stores
  const store = MobxProductStore;
  const history = useHistory();
  // TableFilter states
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Product>("productDescription");
  const [products, setProducts] = useState<Product[]>([]);

  // Products
  const rows: Product[] = stableSort(products, getComparator(order, orderBy));

  useEffect(() => {
    document.title = "NAMCOR - Orders";
    getProducts();
    return () => {};
  }, []);

  const getProducts = async () => {
    const $db = await db.collection("products");
    return $db.onSnapshot((querySnapshot: any) => {
      const docs = querySnapshot.docs.map((doc: any) => {
        return { id: doc.id, ...doc.data() };
      });
      setProducts(docs);
    });
  };

  // Search change handler
  const handleSearchChange = (event: any, value: any) => {
    onViewProduct(value);
  };

  // View single product data
  const onViewProduct = (value: any) => {
    if (value) {
      store.setSingleProductContent(value);
      store.setOpen();
    }
  };

  const onEditProduct = (row: Product) => {
    store.setIsEditProduct();
    store.setSingleProductContent(row);
    history.push("/admin/create-product");
  };

  const onDeleteProduct = (row: Product) => {
    store.setProductTobeDeleted("products", row.id);
    store.openDeleteConfirmationDialog();
  };

  return (
    <ContainterComp>
      <Box className={classes.root}>
        {/* <PageToolbar
            title="Products"
            buttons={
              <Button
                variant="contained"
                color="primary"
                onClick={() => history.push("/admin/create-product")}
              >
                + New Product
              </Button>
            }
          /> */}

        <Box className={classes.flexCenter}>
          <ErrorBoundary>
            <SearchField
              data={products}
              feature={"productName"}
              onChange={(event: any, value: any) =>
                handleSearchChange(event, value)
              }
            />
          </ErrorBoundary>
        </Box>

        <Box className={classes.box}>
          <GroupedOrdersTable
            onViewProduct={onViewProduct}
            onEditProduct={onEditProduct}
            onDeleteProduct={onDeleteProduct}
            data={rows}
          />
        </Box>
      </Box>
    </ContainterComp>
  );
};
export default GroupedOrders;
