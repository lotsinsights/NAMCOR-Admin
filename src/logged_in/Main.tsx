import React, { lazy, Suspense, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/styles/withStyles";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Navbar from "./components/navigation/Navbar";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import LinearIndeterminate from "../shared/components/LinearIndeterminate";
import UpdateTrackingDialog from "../shared/components/UpdateTrackingDialog";
import UpdateQuoteStatusDialog from "./components/quote_requests/UpdateQuoteStatusDialog";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const drawerWidth = 240;

const styles = (theme: any) => ({
  root: {
    display: "flex",
    // height: "100%",
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    width: "100%",
    height: "100%",
    // padding: theme.spacing(3),
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
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
const SalesOrders = lazy(() => import("./components/orders/sales/SalesOrders"));
const PurchaseOrders = lazy(
  () => import("./components/orders/purchase/PurchaseOrders")
);
const ViewTransactionDetails = lazy(
  () => import("./components/view_transaction_details/ViewTransactionDetails")
);
const Settings = lazy(() => import("./components/settings/Settings"));
const Accounts = lazy(() => import("./components/accounts/Accounts"));
const Chats = lazy(() => import("./components/chats/Chats"));
const CreateAccount = lazy(() => import("./components/accounts/CreateAccount"));
const Fuel = lazy(() => import("./components/fuel/Fuel"));
const GroupedOrders = lazy(
  () => import("./components/grouped-orders/GroupedOrders")
);

// Import Dialogs
const FileViewerDialog = lazy(
  () => import("../shared/components/FileViewerDialog")
);
const FeedbackDialog = lazy(
  () => import("../shared/components/FeedbackDialog")
);
const FileUploadDialog = lazy(
  () => import("../shared/components/FileUploadDialog")
);

interface Props {
  classes: any;
}

function Main(props: Props) {
  const { classes } = props;
  let { path } = useRouteMatch();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Navbar handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
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
          <Route exact path={`${path}/grouped-orders`}>
            <Suspense fallback={<LinearIndeterminate />}>
              <GroupedOrders />
            </Suspense>
          </Route>
          <Route exact path={`${path}/fuel`}>
            <Suspense fallback={<LinearIndeterminate />}>
              <Fuel />
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
          <Route exact path={`${path}/orders/sales`}>
            <Suspense fallback={<LinearIndeterminate />}>
              <SalesOrders />
            </Suspense>
          </Route>
          <Route exact path={`${path}/orders/purchase`}>
            <Suspense fallback={<LinearIndeterminate />}>
              <PurchaseOrders />
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
          <Route exact path={`${path}/sales-purchase-details/:id`}>
            <Suspense fallback={<LinearIndeterminate />}>
              <ViewTransactionDetails />
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
      <UpdateTrackingDialog />
      <UpdateQuoteStatusDialog />

      {/* Drawer */}
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(Main);
