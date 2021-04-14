import { useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import SearchField from "../../../shared/components/SearchField";
import MobxInvoiceStore from "../../../shared/stores/InvoiceStore";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import AccountsTable from "./AccountsTable";
import CompanyTableColumn from "../../../shared/interfaces/CompanyTableColumn";
import AccountMenuComp from "./AccountMenuComp";
import PageToolbar from "../../../shared/components/PageToolbar";
import { companies } from "../../dummy_data/dummy_data";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3, 10),
  },
  flexCenter: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  box: {
    marginTop: "50px",
  },
  dspFlex: {
    display: "flex",
    justifyContent: "flex-end",
  },
  margins: {
    margin: theme.spacing(0, 2),
  },
}));

const Accounts = () => {
  const classes = useStyles();
  const store = MobxInvoiceStore;
  const history = useHistory();

  useEffect(() => {
    document.title = "NAMCOR - Invoices";
    return () => {};
  }, []);

  // Search change handler
  const handleSearchChange = (event: any, value: any) => {
    setSingleProductData(value);
  };

  // View single product data
  const setSingleProductData = (value: any) => {
    if (value) {
      // store.setSingleProductContent(value);
      store.setOpen();
    }
  };

  // Table Component Properties
  const columns: CompanyTableColumn[] = [
    { id: "status", label: "", minWidth: 50 },
    { id: "companyName", label: "Company name", minWidth: 170 },
    { id: "location", label: "Location", minWidth: 170 },
  ];

  return (
    <Box className={classes.root}>
      <PageToolbar
        title="Accounts"
        buttons={
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/admin/create-account")}
          >
            + New User
          </Button>
        }
      />
      <Box className={classes.flexCenter}>
        <SearchField
          data={companies}
          feature={"companyName"}
          onChange={(event: any, value: any) =>
            handleSearchChange(event, value)
          }
        />
      </Box>

      <Box className={classes.box}>
        <AccountsTable columns={columns} rows={companies}>
          <AccountMenuComp />
        </AccountsTable>
      </Box>
    </Box>
  );
};

export default Accounts;
