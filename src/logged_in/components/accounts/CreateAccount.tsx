import React, { useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { Hidden, TableContainer } from "@material-ui/core";
import { PublishOutlined } from "@material-ui/icons";
import PageToolbar from "../../../shared/components/PageToolbar";
import Button from "@material-ui/core/Button";
// import PublishIcon from '@material-ui/icons/Publish';

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

const CreateAccount = () => {
  const classes = useStyles();
  const formVariant: FormVariants = "outlined";
  return (
    <Box className={classes.root}>
      <PageToolbar
        title="Create a profile"
        buttons={
          <>
            <Button
              variant="contained"
              color="primary"
              // onClick={() => history.push("/admin/products")}
            >
              Save Profile
            </Button>
          </>
        }
      />

      <form noValidate autoComplete="off">
        {/* Company details */}
        <Box className={classes.tableContainer}>
          <Typography
            variant="h6"
            component="h5"
            className={classes.tableContainer}
          >
            Company details
          </Typography>
          <Box
            className={classes.grid}
            boxShadow={2}
            borderRadius="borderRadius"
          >
            <Grid container spacing={3}>
              <Grid item xs={6} className={classes.textField}>
                <TextField label="Company name" variant={formVariant} />
              </Grid>
              <Grid item xs={6} className={classes.textField}>
                <TextField
                  label="Company Registration Number"
                  variant={formVariant}
                />
              </Grid>
              <Grid item xs={12} className={classes.textField}>
                <TextField
                  multiline
                  rows={4}
                  variant={formVariant}
                  label="Company mission"
                />
              </Grid>
              <Grid item xs={12} className={classes.textField}>
                <TextField
                  multiline
                  rows={4}
                  variant={formVariant}
                  label="Company vision"
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
            Address details
          </Typography>
          <Box
            className={classes.grid}
            boxShadow={2}
            borderRadius="borderRadius"
          >
            <Grid container spacing={3}>
              <Grid item xs={12} className={classes.textField}>
                <TextField label="Region" variant={formVariant} />
              </Grid>
              <Grid item xs={12} className={classes.textField}>
                <TextField
                  multiline
                  rows={4}
                  variant={formVariant}
                  label="Physical adddress"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* Contact details */}
        <Box className={classes.tableContainer}>
          <Typography
            variant="h6"
            component="h5"
            className={classes.tableContainer}
          >
            Contact details
          </Typography>
          <Box
            className={classes.grid}
            boxShadow={2}
            borderRadius="borderRadius"
          >
            <Grid container spacing={3}>
              <Grid item xs={4} className={classes.textField}>
                <TextField label="Email" type="email" variant={formVariant} />
              </Grid>
              <Grid item xs={4} className={classes.textField}>
                <TextField label="Phone number" variant={formVariant} />
              </Grid>
              <Grid item xs={4} className={classes.textField}>
                <TextField label="Fax" variant={formVariant} />
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* Documents */}
        <Box className={classes.tableContainer}>
          <Typography
            variant="h6"
            component="h5"
            className={classes.tableContainer}
          >
            Documents
          </Typography>

          <Box>
            <Grid container spacing={3}>
              <Grid item xs={2} className={classes.textField}>
                <label htmlFor="founding_statment">
                  <Paper className={classes.upload}>
                    Founding Statement <br />{" "}
                    <PublishOutlined color="primary" />
                  </Paper>
                  <input id="founding_statment" hidden type="file" />
                </label>
              </Grid>
              <Grid item xs={2} className={classes.textField}>
                <label htmlFor="board_of_directors">
                  <Paper className={classes.upload}>
                    Board of directors
                    <br />
                    <PublishOutlined color="primary" />
                  </Paper>
                  <input id="board_of_directors" hidden type="file" />
                </label>
              </Grid>
              <Grid item xs={2} className={classes.textField}>
                <label htmlFor="bank_statements">
                  <Paper className={classes.upload}>
                    Bank Statements
                    <br />
                    <PublishOutlined color="primary" />
                  </Paper>
                  <input id="bank_statements" hidden type="file" />
                </label>
              </Grid>
              <Grid item xs={2} className={classes.textField}>
                <label htmlFor="business_plan">
                  <Paper className={classes.upload}>
                    Business Plan
                    <br />
                    <PublishOutlined color="primary" />
                  </Paper>
                  <input id="business_plan" hidden type="file" />
                </label>
              </Grid>
              <Grid item xs={2} className={classes.textField}>
                <label htmlFor="ID_documents">
                  <Paper className={classes.upload}>
                    ID Documents of all members
                    <br />
                    <PublishOutlined color="primary" />
                  </Paper>
                  <input id="ID_documents" hidden type="file" />
                </label>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default CreateAccount;
