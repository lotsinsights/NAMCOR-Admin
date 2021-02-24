import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import React from "react";
import SnackBar from "../../../shared/components/SnackBar";
import Product from "../../../shared/interfaces/Product";

interface Props {
  classes: any;
  onViewProduct: (row: Product) => void;
  row: Product;
}

export const ActionsComp = (props: Props) => {
  const { classes, onViewProduct, row } = props;

  return (
    <Box className={classes.dspFlex}>
      <Button
        className={classes.margins}
        onClick={() => onViewProduct(row)}
        color="primary"
        variant="text"
      >
        View
      </Button>
      <SnackBar />
    </Box>
  );
};
