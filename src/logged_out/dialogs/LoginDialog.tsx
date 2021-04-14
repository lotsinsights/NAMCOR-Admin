import React, { Fragment, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { observer } from "mobx-react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";
import { AddOutlined, LockOutlined } from "@material-ui/icons";
import MobxFileUploadDialogStore from "../../shared/stores/FileUploadDialogStore";
import MobxLoginDialogStore from "../../shared/stores/LoginStore";
import { useHistory } from "react-router-dom";
import Link from "@material-ui/core/Link";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const options = [
  "Account has enough credit",
  "Urgent order",
  "All documents are available",
  "Others",
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      backgroundColor: red[500],
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    sectionHeader: {
      marginTop: 10,
      marginBottom: 30,
      fontWeight: 600,
    },
    flexCenter: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    // flexSpaceBetween: {
    //   display: "flex",
    //   justifyContent: "space-between",
    // },
    loginButton: {
      marginTop: 20,
      marginBottom: 20,
    },
    forgotPassword: {
      fontSize: "1rem",
      marginBottom: 30,
    },
  })
);

const LoginDialog = observer(() => {
  const classes = useStyles();
  const [loginStore] = useState(() => MobxLoginDialogStore);

  //   Use history
  let history = useHistory();

  const handleClose = () => {
    loginStore.closeLoginDialog();
  };

  const handleLogin = () => {
    history.push("/admin");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setValue((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <Dialog
        maxWidth="xs"
        open={loginStore.isLoginDialogOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {/* <DialogTitle id="form-dialog-title">Login</DialogTitle> */}
        <DialogContent>
          <Box>
            <Box className={classes.flexCenter}>
              <Avatar className={classes.avatar}>
                <LockOutlined style={{ fontSize: 40 }} />
              </Avatar>

              <Typography
                className={classes.sectionHeader}
                variant="body1"
                component="p"
              >
                Login
              </Typography>
            </Box>

            <TextField
              autoFocus
              margin="dense"
              label="Email address*"
              type="email"
              variant="outlined"
              fullWidth
            />
            <TextField
              margin="dense"
              label="Password*"
              type="password"
              variant="outlined"
              fullWidth
            />

            <FormControlLabel
              value="remember_user"
              control={<Checkbox color="primary" />}
              label="Remember me"
              labelPlacement="end"
            />

            <Box className={classes.flexCenter}>
              <Button
                className={classes.loginButton}
                variant="contained"
                color="primary"
                onClick={handleLogin}
                fullWidth
              >
                Login
              </Button>
              <Typography className={classes.forgotPassword} variant="caption">
                <Link
                  component="button"
                  color="inherit"
                  onClick={() => {
                    console.info("I'm a button.");
                  }}
                >
                  Forgot password?
                </Link>
              </Typography>
            </Box>

            {/* <Box className={classes.flexSpaceBetween}>
              <Typography className={classes.forgotPassword} variant="caption">
                <Link
                  component="button"
                  color="inherit"
                  onClick={() => {
                    console.info("I'm a button.");
                  }}
                >
                  Forgot password?
                </Link>
              </Typography>

              <Typography className={classes.forgotPassword} variant="caption">
                <Link
                  component="button"
                  color="inherit"
                  onClick={() => {
                    console.info("I'm a button.");
                  }}
                >
                  Request access
                </Link>
              </Typography>
            </Box> */}
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
});

export default LoginDialog;
