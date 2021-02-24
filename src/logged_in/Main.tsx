import withStyles from "@material-ui/styles/withStyles";
import React, { lazy, Suspense } from "react";

import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import LinearIndeterminate from "../shared/components/LinearIndeterminate";
import { Accounts } from "./components/accounts/Accounts";
import { Chats } from "./components/chats/Chats";
import Navbar from "./components/navigation/Navbar";
import { Orders } from "./components/orders/Orders";
import { Settings } from "./components/settings/Settings";

const styles = (theme: any) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    width: "100%",
    // padding: theme.spacing(3),
  },
});

// Lazy load components
const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));
const Quotes = lazy(() => import("./components/quotes/Quotes"));
const Products = lazy(() => import("./components/products/Products"));
const Invoices = lazy(() => import("./components/invoices/Invoices"));
const InvoiceDetails = lazy(
  () => import("./components/invoices/InvoiceDetails")
);
const CreateInvoice = lazy(
  () => import("./components/create_invoice/CreateInvoice")
);
const Cart = lazy(() => import("./components/cart/Cart"));

interface Props {
  classes: any;
}

function Main(props: Props) {
  const { classes } = props;
  let { path } = useRouteMatch();

  return (
    <div className={classes.root}>
      <Navbar />

      <main className={classes.content}>
        <Switch>
          <Route exact path={`${path}`}>
            <Redirect to={`${path}/dashboard`} />
          </Route>
          <Route exact path={`${path}/dashboard`}>
            <Suspense fallback={<LinearIndeterminate />}>
              <Dashboard />
            </Suspense>
          </Route>
          <Route exact path={`${path}/products`}>
            <Suspense fallback={<LinearIndeterminate />}>
              <Products />
            </Suspense>
          </Route>
          <Route exact path={`${path}/cart`}>
            <Suspense fallback={<LinearIndeterminate />}>
              <Cart />
            </Suspense>
          </Route>
          <Route exact path={`${path}/quotes`}>
            <Suspense fallback={<LinearIndeterminate />}>
              <Quotes />
            </Suspense>
          </Route>
          <Route exact path={`${path}/orders`}>
            <Suspense fallback={<LinearIndeterminate />}>
              <Orders />
            </Suspense>
          </Route>
          <Route exact path={`${path}/accounts`}>
            <Suspense fallback={<LinearIndeterminate />}>
              <Accounts />
            </Suspense>
          </Route>
          <Route exact path={`${path}/invoices`}>
            <Suspense fallback={<LinearIndeterminate />}>
              <Invoices />
            </Suspense>
          </Route>
          <Route exact path={`${path}/invoice-details`}>
            <Suspense fallback={<LinearIndeterminate />}>
              <InvoiceDetails />
            </Suspense>
          </Route>
          <Route exact path={`${path}/create-invoice`}>
            <Suspense fallback={<LinearIndeterminate />}>
              <CreateInvoice />
            </Suspense>
          </Route>
          <Route exact path={`${path}/settings`}>
            <Suspense fallback={<LinearIndeterminate />}>
              <Settings />
            </Suspense>
          </Route>
          <Route exact path={`${path}/chats`}>
            <Chats />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(Main);
