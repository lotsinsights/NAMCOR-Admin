import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { useEffect, useState } from "react";
import SearchField from "../../../shared/components/SearchField";

import {
  getComparator,
  Order,
  stableSort,
} from "../../../shared/functions/TableSort";
import Product from "../../../shared/interfaces/Product";
import MobxProductStore from "../../../shared/stores/ProductStore";
import SingleProductDialog from "./SingleProductDialog";
import { useHistory } from "react-router-dom";
import PageToolbar from "../../../shared/components/PageToolbar";
import Button from "@material-ui/core/Button";
import { db } from "../../../shared/services/firebase";
import EnhancedProductTable from "./EnhancedProductTable";
import ErrorBoundary from "../../../shared/components/ErrorBoundary";

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

const Products = () => {
  const classes = useStyles();
  // Stores
  const store = MobxProductStore;
  const history = useHistory();
  // TableFilter states
  const [activeFilters, setActiveFilters] = useState(0);
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Product>("productDescription");
  const [products, setProducts] = useState<Product[]>([]);

  // Products
  const rows: Product[] = stableSort(products, getComparator(order, orderBy));

  useEffect(() => {
    document.title = "NAMCOR - Products";
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
    setSingleProductData(value);
  };

  // View single product data
  const setSingleProductData = (value: any) => {
    if (value) {
      store.setSingleProductContent(value);
      store.setOpen();
    }
  };

  return (
    <Box className={classes.root}>
      <PageToolbar
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
      />

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
        <Table columns={columns} rows={rows}>
          <ProductMenuComp onViewProduct={setSingleProductData} />
        </Table>
        <SingleProductDialog store={store} onClose={() => store.setClose()} />
      </Box> */}

      <Box className={classes.box}>
        <EnhancedProductTable
          onViewProduct={setSingleProductData}
          data={rows}
        />
      </Box>

      <Box>
        <SingleProductDialog store={store} onClose={() => store.setClose()} />
      </Box>
    </Box>
  );
};
export default Products;
