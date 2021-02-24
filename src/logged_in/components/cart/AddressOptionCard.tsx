import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";
import MobxCartStore from "../../../shared/stores/CartStore";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 12,
  },
  pos: {
    marginLeft: 12,
  },
  alignRight: {
    display: "flex",
    justifyContent: "flex-end",
  },
});

export default function AddressOptionCard(props: any) {
  const { address } = props;
  const classes = useStyles();
  const store = MobxCartStore;

  const handleAddressSelect = () => {
    store.setAddress(address);
    store.setClosePickAddressDialog();
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea onClick={handleAddressSelect}>
        <CardContent>
          <Typography variant="body2" component="div">
            {address}
          </Typography>
        </CardContent>
        <CardActions className={classes.alignRight}>
          <Button
            className={classes.pos}
            variant="text"
            color="secondary"
            size="small"
          >
            Remove
          </Button>
          <Button variant="text" color="primary" size="small">
            Edit
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
