import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import React, { Fragment, useEffect, useState } from "react";
import MenuComp from "../../../shared/components/MenuComp";
import SearchField from "../../../shared/components/SearchField";
import SnackBar from "../../../shared/components/SnackBar";
import TableComp from "../../../shared/components/TableComp";
import TableFilter from "../../../shared/components/TableFilter";
import {
  getComparator,
  Order,
  stableSort,
} from "../../../shared/functions/TableSort";
import Product from "../../../shared/interfaces/Product";
import ProductTableColumn from "../../../shared/interfaces/ProductTableColumn";
import MobxProductStore from "../../../shared/stores/ProductStore";
import { products } from "../../dummy_data/Products";
import { ActionsComp as ChildComp } from "./ActionsComp";
import SingleProductDialog from "./SingleProductDialog";

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
const columns: ProductTableColumn[] = [
  { id: "name", label: "Lube Name", minWidth: 170 },
  { id: "description", label: "Description", minWidth: 100 },
];

const Products = () => {
  const classes = useStyles();
  const store = MobxProductStore;
  // TableFilter
  const [activeFilters, setActiveFilters] = useState(0);
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Product>("description");

  const arrayOfLabels = (): (keyof Product)[] => {
    return ["name", "description"];
  };

  const rows: Product[] = stableSort(products, getComparator(order, orderBy));

  useEffect(() => {
    document.title = "NAMCOR - Products";
    return () => {};
  }, []);

  // Search change handler
  const handleSearchChange = (event: any, value: any) => {
    setSingleProductData(value);
  };

  // View single product data
  const setSingleProductData = (value: any) => {
    if (value) {
      store.setSingleProductContent(value);
      store.setOpen();
    }
  };

  // Single product close handler
  // const handleSingleProductDialogClose = () => {
  //   // Close dialog
  //   store.setClose();
  //   // Clear search
  // };

  return (
    <Box className={classes.root}>
      <Typography variant="h4" component="h2">
        Products
      </Typography>

      <Box className={classes.flexCenter}>
        <SearchField
          data={products}
          feature={"name"}
          onChange={(event: any, value: any) =>
            handleSearchChange(event, value)
          }
        />
      </Box>

      <Box className={classes.tableContainer}>
        <TableFilter
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
          order={order}
          setOrder={setOrder}
          label={orderBy}
          setLabel={setOrderBy}
          arrayOfLabels={arrayOfLabels()}
        />
      </Box>

      <Box className={classes.tableContainer}>
        <TableComp columns={columns} rows={rows}>
          <ChildComp
            classes={classes}
            row={products[1]}
            onViewProduct={setSingleProductData}
          />
        </TableComp>
        <SingleProductDialog store={store} onClose={() => store.setClose()} />
      </Box>
    </Box>
  );
};
export default Products;
