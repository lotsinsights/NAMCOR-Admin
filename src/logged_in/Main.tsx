import withStyles from "@material-ui/styles/withStyles";
import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import LinearIndeterminate from "../shared/components/LinearIndeterminate";
import FileViewerDialog from "../shared/components/FileViewerDialog";
import Navbar from "./components/navigation/Navbar";
import FeedbackDialog from "../shared/components/FeedbackDialog";
import FileUploadDialog from "../shared/components/FileUploadDialog";

const styles = (theme: any) => ({
  root: {
    display: "flex",
    height: "100%",
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    width: "100%",
    height: "100%",
    // padding: theme.spacing(3),
  },
});

// Lazy load components
const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));
const Quotes = lazy(() => import("./components/quotes/Quotes"));
const Products = lazy(() => import("./components/products/Products"));
const CreateProduct = lazy(() => import("./components/products/CreateProduct"));
const Invoices = lazy(() => import("./components/invoices/Invoices"));
const InvoiceDetails = lazy(
  () => import("./components/invoices/InvoiceDetails")
);
const CreateInvoice = lazy(
  () => import("./components/create_invoice/CreateInvoice")
);
const QuoteRequests = lazy(
  () => import("./components/quote_requests/QuoteRequests")
);
const Orders = lazy(() => import("./components/orders/Orders"));
const SalesPurchaseDetails = lazy(
  () => import("../shared/components/SalesPurchaseDetails")
);
const Settings = lazy(() => import("./components/settings/Settings"));
const Accounts = lazy(() => import("./components/accounts/Accounts"));
const Chats = lazy(() => import("./components/chats/Chats"));
const CreateAccount = lazy(() => import("./components/accounts/CreateAccount"));

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
          <Route exact path={`${path}/create-product`}>
            <Suspense fallback={<LinearIndeterminate />}>
              <CreateProduct />
            </Suspense>
          </Route>
          <Route exact path={`${path}/requests`}>
            <Suspense fallback={<LinearIndeterminate />}>
              <QuoteRequests />
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
          <Route exact path={`${path}/create-account`}>
            <Suspense fallback={<LinearIndeterminate />}>
              <CreateAccount />
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
          <Route exact path={`${path}/sales-purchase-details`}>
            <Suspense fallback={<LinearIndeterminate />}>
              <SalesPurchaseDetails />
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

      {/* Dialogs */}
      <FileViewerDialog />
      <FeedbackDialog />
      <FileUploadDialog />
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(Main);
