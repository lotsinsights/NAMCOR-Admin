import { ChangeEvent, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: "100%",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

export default function InputSelect(props: any) {
  const classes = useStyles();
  const { label, setLabel, onChange } = props;
  const [value, setValue] = useState("asc");

  const options = ["asc", "desc"];

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val: string = event.target.value;
    setValue(val);
    setLabel(label);
    onChange(event);
  };

  return (
    <TextField
      select
      label={label}
      value={value}
      onChange={handleChange}
      // helperText="Please select your feature"
      variant="outlined"
      className={classes.formControl}
    >
      {options.map((option, index) => (
        <MenuItem key={index} value={option}>
          {option === "asc" ? "Ascending order" : "Descending order"}
        </MenuItem>
      ))}
    </TextField>
  );
}
