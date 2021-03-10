import React, { Fragment, Suspense, lazy } from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import { SnackbarProvider } from "notistack";

const LoggedInComponent = lazy(() => import("./logged_in/Main"));
const LoggedOutComponent = lazy(() => import("./logged_out/Main"));

function App() {
  return (
    <Router>
      <SnackbarProvider maxSnack={5}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles />

          <Suspense fallback={<Fragment />}>
            <Switch>
              <Route path="/admin">
                <LoggedInComponent />
              </Route>
              <Route exact path="/">
                <LoggedOutComponent />
              </Route>
            </Switch>
          </Suspense>
        </MuiThemeProvider>
      </SnackbarProvider>
    </Router>
  );
}

export default App;
