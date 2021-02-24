import { Box, Theme } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  autocomplete: {
    width: 400,
  },
  textField: {
    // borderRadius: "10px",
  },
}));

interface Props<T> {
  data: Array<T>;
  feature: string;
  onChange: (event: any, value: any) => void;
}

const SearchField = (props: Props<any>) => {
  const classes = useStyles();
  const { data, feature, onChange } = props;

  return (
    <Box>
      <Autocomplete
        className={classes.autocomplete}
        options={data}
        getOptionLabel={(option) => option[feature]}
        onChange={onChange}
        renderInput={(params) => (
          <TextField
            className={classes.textField}
            {...params}
            label="Search"
            variant="outlined"
            margin="normal"
          />
        )}
        renderOption={(option, { inputValue }) => {
          const matches = match(option[feature], inputValue);
          const parts = parse(option[feature], matches);

          return (
            <Box>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{ fontWeight: part.highlight ? 700 : 400 }}
                >
                  {part.text}
                </span>
              ))}
            </Box>
          );
        }}
      />
    </Box>
  );
};

export default SearchField;
