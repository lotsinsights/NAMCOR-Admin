import { Box, makeStyles, Theme, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import SearchField from "../../../shared/components/SearchField";
import TableComp from "../../../shared/components/TableComp";
import ProductTableColumn from "../../../shared/interfaces/ProductTableColumn";
import { products } from "../../dummy_data/Products";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import PickAddressDialog from "./PickAddressDialog";
import { DeleteOutlined } from "@material-ui/icons";
import MobxCartStore from "../../../shared/stores/CartStore";
import { observer } from "mobx-react";
import AddressInputDialog from "./AddressInputDialog";

// Styles
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

  margin: {
    margin: theme.spacing(0, 2),
  },

  addressContainer: {
    padding: theme.spacing(3, 5),
    border: 2,
    borderColor: "#7f0000",
    borderStyle: "dashed",
    backgroundColor: "#ffe5e5",
    borderRadius: 10,
  },

  addressContainerValid: {
    backgroundColor: "#e8eaef",
    borderColor: theme.palette.primary.main,
  },
}));

const columns: ProductTableColumn[] = [
  { id: "name", label: "Lube Name", minWidth: 170 },
  { id: "description", label: "Description", minWidth: 100 },
];

const DisplayAddress = observer((props: any) => {
  const classes = useStyles();
  const store = props.store;

  const handleOpenAddress = (e: any) => {
    store.setOpenPickAddressDialog();
  };

  const displayAddress = store.getSelectedAddress ? (
    <Box
      className={clsx(classes.addressContainer, classes.addressContainerValid)}
    >
      {store.address}
      <Button variant="text" color="primary" onClick={handleOpenAddress}>
        Change Address
      </Button>
    </Box>
  ) : (
    <Box className={classes.addressContainer}>
      <Button variant="text" color="primary" onClick={handleOpenAddress}>
        Add Address
      </Button>
    </Box>
  );

  return <>{displayAddress}</>;
});

const Cart = () => {
  const classes = useStyles();
  const store = MobxCartStore;

  const handleSearchChange = (event: any, value: any) => {
    if (value) {
      console.log("Value: ", value);
      // store.setSingleProductContent(value);
      // store.setOpen();
    }
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h4" component="h2">
        Cart
      </Typography>

      <Box className={classes.flexCenter}>
        <SearchField
          data={products}
          feature={"name"}
          onChange={handleSearchChange}
        />
      </Box>

      <Box className={classes.tableContainer}>
        <DisplayAddress store={store} />
      </Box>

      <Box className={classes.tableContainer}>
        <TableComp columns={columns} rows={products}>
          <IconButton aria-label="delete" className={classes.margin}>
            <DeleteOutlined fontSize="small" />
          </IconButton>
        </TableComp>
      </Box>

      <PickAddressDialog store={store} />
      <AddressInputDialog store={store} />
    </Box>
  );
};

export default Cart;
