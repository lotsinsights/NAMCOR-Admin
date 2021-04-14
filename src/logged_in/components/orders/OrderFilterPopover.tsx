import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { ExpandMoreOutlined } from "@material-ui/icons";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import TagFacesIcon from "@material-ui/icons/TagFaces";
import { Fragment } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(0),
    },
    content: {
      maxWidth: 350,
    },
    footer: {
      display: "flex",
      justifyContent: "space-between",
      padding: theme.spacing(1),
    },
    chipRoot: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      listStyle: "none",
      padding: theme.spacing(0.5),
      margin: 0,
    },
    chip: {
      margin: theme.spacing(0.5),
    },
    accordionRoot: {
      border: "1px solid rgba(0, 0, 0, .125)",
      boxShadow: "none",

      "&:not(:last-child)": {
        borderBottom: 0,
        margin: 0,
      },
      "&:before": {
        display: "none",
      },
      "&$expanded": {
        margin: 0,
      },
      "&:last-child": {
        margin: 0,
      },
    },

    accordingSummary: {
      backgroundColor: "#f2f2f2",
    },
  })
);

interface ChipData {
  key: number;
  label: string;
}

const ChipsArray = () => {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState<ChipData[]>([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
  ]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  return (
    <Box component="ul" className={classes.chipRoot}>
      {chipData.map((data) => {
        return (
          <li key={data.key}>
            <Chip
              label={data.label}
              // onDelete={data.label === "React" ? undefined : handleDelete(data)}
              className={classes.chip}
            />
          </li>
        );
      })}
    </Box>
  );
};

const SortBy = () => {
  const [value, setValue] = React.useState("asc");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <RadioGroup
        aria-label="sort"
        name="sort-by"
        // value={value}
        // onChange={handleChange}
      >
        <FormControlLabel value="asc" control={<Radio />} label="Ascending" />
        <FormControlLabel value="desc" control={<Radio />} label="Descending" />
      </RadioGroup>
    </>
  );
};

interface Props {
  anchorEl: HTMLButtonElement | null;
  onFilterClose: () => void;
  id: string | undefined;
  open: boolean;
}

const OrderFilterPopover = (props: Props) => {
  const classes = useStyles();
  const { anchorEl, onFilterClose, id, open } = props;
  const conditions = [
    "No condition",
    "(==) equals to",
    "(!=) not equals to",
    "(>) greater than",
    "(>=) greater than or equals to",
    "(<) less than",
    "(<=) less than or equals to",
  ];

  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={onFilterClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box className={classes.content}>
          <Accordion className={classes.accordionRoot}>
            <AccordionSummary
              className={classes.accordingSummary}
              expandIcon={<ExpandMoreOutlined />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.typography}>
                Filter by field
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <ChipsArray />
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.accordionRoot}>
            <AccordionSummary
              className={classes.accordingSummary}
              expandIcon={<ExpandMoreOutlined />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.typography}>
                Add condition
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TextField
                select
                label="Conditions"
                variant="outlined"
                // value={currency}
                // onChange={handleChange}
                margin="dense"
                fullWidth
              >
                {conditions.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.accordionRoot}>
            <AccordionSummary
              className={classes.accordingSummary}
              expandIcon={<ExpandMoreOutlined />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.typography}>
                Sort results
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <SortBy />
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box className={classes.footer}>
          <Button>Clear</Button>
          <Box>
            <Button>Cancel</Button>
            <Button>Apply</Button>
          </Box>
        </Box>
      </Popover>
    </div>
  );
};

export default OrderFilterPopover;
