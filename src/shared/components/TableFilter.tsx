import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Paper } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
// Accordion
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// Grid
import Grid from "@material-ui/core/Grid";

// Form controls
import InputSelect from "./InputSelect";
import { Order } from "../functions/TableSort";
import Product from "../interfaces/Product";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    paper: {
      padding: theme.spacing(2),
      //   color: theme.palette.text.secondary,
    },
  })
);

interface Props {
  activeFilters: number;
  setActiveFilters: Dispatch<SetStateAction<number>>;
  order: Order;
  setOrder: Dispatch<SetStateAction<Order>>;
  label: keyof Product;
  setLabel: Dispatch<SetStateAction<keyof Product>>;
  arrayOfLabels: string[];
}

const TableFilter = (props: Props) => {
  const classes = useStyles();
  const { setOrder, setLabel, arrayOfLabels } = props;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === "asc") setOrder("asc");
    else setOrder("desc");
  };

  return (
    <Paper className={classes.root}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Filters{/*  ({activeFilters}) */}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            {arrayOfLabels.map((label, index) => (
              <Grid item xs={3} key={index}>
                <InputSelect
                  className={classes.paper}
                  label={label}
                  setLabel={setLabel}
                  onChange={handleInputChange}
                />
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
};

export default TableFilter;
