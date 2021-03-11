import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { useEffect, useState } from "react";
import SearchField from "../../../shared/components/SearchField";

import TableFilter from "../../../shared/components/TableFilter";
import Table from "./ProductsTable";
import {
  getComparator,
  Order,
  stableSort,
} from "../../../shared/functions/TableSort";
import Product from "../../../shared/interfaces/Product";
import ProductTableColumn from "../../../shared/interfaces/ProductTableColumn";
import MobxProductStore from "../../../shared/stores/ProductStore";
import { products } from "../../dummy_data/dummy_data";
import ProductMenuComp from "./ProductMenuComp";
import SingleProductDialog from "./SingleProductDialog";
import { useHistory } from "react-router-dom";
import PageToolbar from "../../../shared/components/PageToolbar";
import Button from "@material-ui/core/Button";

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
  { id: "status", label: "", minWidth: 50 },
  { id: "name", label: "Lube Name", minWidth: 170 },
  { id: "description", label: "Description", minWidth: 100 },
];

const Products = () => {
  const classes = useStyles();
  const store = MobxProductStore;
  const history = useHistory();
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
        <Table columns={columns} rows={rows}>
          <ProductMenuComp onViewProduct={setSingleProductData} />
        </Table>
        <SingleProductDialog store={store} onClose={() => store.setClose()} />
      </Box>
    </Box>
  );
};
export default Products;
