import { makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import PageToolbar from "../../../shared/components/PageToolbar";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import MobxProductStore from "../../../shared/stores/ProductStore";
import Product from "../../../shared/interfaces/Product";
import { db } from "../../../shared/services/firebase";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3, 10),
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
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

  //   Fluid grid
  grid: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  //   Form
  textField: {
    "& > *": {
      width: "100%",
    },
  },

  //   Upload
  upload: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    transition: ".3s ease all",
    height: "100%",
    "&:hover": {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.grey[300],
      cursor: "pointer",
    },
  },
}));

type FormVariants = "filled" | "outlined" | "standard";

const CreateProduct = () => {
  const classes = useStyles();
  const [store] = useState(() => MobxProductStore);
  const [product, setProduct] = useState<Product>({
    id: "",
    productName: "",
    productDescription: "",
    productAvailabilityStatus: "",
    productPrice: 0,
    // discount: 0,
  });
  const formVariant: FormVariants = "outlined";
  const history = useHistory();

  useEffect(() => {
    document.title = "NAMCOR - New product";
    if (store.isEditProduct) {
      setProduct(store.getContent);
      console.log("Product: ", store.getContent);
    }
    return () => {
      store.clearIsEditProduct();
    };
  }, []);

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    console.log("Product: ", product);
    history.push("/admin/products");
    // if valid
    onProductAdd();
  };

  const onProductAdd = async () => {
    console.log("Adding product...");

    const $db = await db.collection("products");
    $db
      .add(product)
      .then((productRef) => {
        console.log("Product id: ", productRef.id);
        // Update ID
        $db.doc(productRef.id).update({ id: productRef.id });
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <Box className={classes.root}>
      <PageToolbar
        title="Add New Product"
        buttons={
          <>
            <Button className={classes.margins} variant="text" color="primary">
              Save to Draft
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              form="productForm"
            >
              Save and Upload
            </Button>
          </>
        }
      />

      <form
        id="productForm"
        noValidate
        autoComplete="off"
        onSubmit={onFormSubmit}
      >
        <Box className={classes.tableContainer}>
          <Typography
            variant="h6"
            component="h5"
            className={classes.tableContainer}
          >
            Product Details
          </Typography>
          <Box
            className={classes.grid}
            boxShadow={2}
            borderRadius="borderRadius"
          >
            <Grid container spacing={3}>
              <Grid item xs={12} className={classes.textField}>
                <TextField
                  label="Product name"
                  variant={formVariant}
                  value={product?.productName || ""}
                  onChange={(e) =>
                    setProduct({ ...product, productName: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} className={classes.textField}>
                <TextField
                  multiline
                  rows={4}
                  variant={formVariant}
                  label="Product description"
                  value={product?.productDescription || ""}
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      productDescription: e.target.value,
                    })
                  }
                />
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* Adddress details */}
        <Box className={classes.tableContainer}>
          <Typography
            variant="h6"
            component="h5"
            className={classes.tableContainer}
          >
            Product Pricing Matrix
          </Typography>
          <Box
            className={classes.grid}
            boxShadow={2}
            borderRadius="borderRadius"
          >
            <Grid container spacing={3}>
              <Grid item xs={4} className={classes.textField}>
                <TextField
                  label="Price per litre"
                  variant={formVariant}
                  type="number"
                  value={product?.productPrice || 0}
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      productPrice: Number(e.target.value),
                    })
                  }
                />
              </Grid>
              <Grid item xs={4} className={classes.textField}>
                <TextField
                  label="Discount"
                  variant={formVariant}
                  type="number"
                  value={product?.productDiscount || 0}
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      productDiscount: Number(e.target.value),
                    })
                  }
                />
              </Grid>
              <Grid item xs={4} className={classes.textField}>
                <TextField
                  select
                  label={"Stock Status"}
                  // onChange={(event)  => setProduct({...product, status: event.target.value})}
                  helperText="Please select stock status"
                  variant="outlined"
                  value={product?.productAvailabilityStatus || ""}
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      productAvailabilityStatus: e.target.value,
                    })
                  }
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Available"}>Available</MenuItem>
                  <MenuItem value={"Out of stock"}>Out of stock</MenuItem>
                </TextField>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default CreateProduct;
