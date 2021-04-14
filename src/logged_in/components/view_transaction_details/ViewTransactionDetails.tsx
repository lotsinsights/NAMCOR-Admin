import React, { useEffect, useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import PageToolbar from "../../../shared/components/PageToolbar";
import { useHistory } from "react-router";
import { Button } from "@material-ui/core";
import QuoteRequestAccordion from "../../../shared/components/salesAndPurchaseComponents/QuoteRequestAccordion";
import QuoteAccordion from "../../../shared/components/salesAndPurchaseComponents/QuoteAccordion";
import InvoiceAccordion from "../../../shared/components/salesAndPurchaseComponents/InvoiceAccordion";
import ProofOfPaymentAccordion from "../../../shared/components/salesAndPurchaseComponents/ProofOfPaymentAccordion";
import PurchaseOrderAccordion from "../../../shared/components/salesAndPurchaseComponents/PurchaseOrderAccordion";
import SalesOrderAccordion from "../../../shared/components/salesAndPurchaseComponents/SalesOrderAccordion";
import { observer } from "mobx-react";
import MobxActiveSalesAccordionStore from "../../../shared/stores/ActiveSalesAccordionStore";
import FuelOrderAccordion from "../../../shared/components/salesAndPurchaseComponents/FuelOrderAccordion";
import { DeleteOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      padding: theme.spacing(3, 10),
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: "33.33%",
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    accordionDetails: {
      display: "block",
    },
    accordionActions: {
      backgroundColor: "#f6f6f6",
    },

    attachments: {
      display: "flex",
      flexWrap: "wrap",
    },
    button: {
      margin: theme.spacing(1),
    },
  })
);

const ViewTransactionDetails = observer(() => {
  const classes = useStyles();
  const [activeAccordionStore] = useState(() => MobxActiveSalesAccordionStore);
  const [expanded, setExpanded] = useState<string | false>(
    activeAccordionStore.getActiveStage
  );
  const history = useHistory();

  useEffect(() => {
    document.title = "NAMCOR - Sales and Purchase Details";
    return () => {};
  }, []);

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
    activeAccordionStore.setActiveStage(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <PageToolbar
        // title="Sales and Purchase details"
        buttons={
          <>
            <Button
              style={{ marginRight: 20 }}
              variant="text"
              color="primary"
              // className={classes.button}
              startIcon={<DeleteOutlined />}
            >
              Delete
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={() => history.goBack()}
            >
              Go Back
            </Button>

            {/* <Button
              variant="contained"
              color="primary"
              onClick={() => history.push("/admin/create-product")}
            >
              Save and update
            </Button> */}
          </>
        }
      />

      <QuoteRequestAccordion
        expanded={expanded}
        accordionName={"requests"}
        onChange={handleChange("requests")}
        classes={classes}
      />
      <QuoteAccordion
        expanded={expanded}
        accordionName={"quotes"}
        onChange={handleChange("quotes")}
        classes={classes}
      />
      <PurchaseOrderAccordion
        expanded={expanded}
        accordionName={"purchases"}
        onChange={handleChange("purchases")}
        classes={classes}
      />
      <SalesOrderAccordion
        expanded={expanded}
        accordionName={"sales"}
        onChange={handleChange("sales")}
        classes={classes}
      />
      <InvoiceAccordion
        expanded={expanded}
        accordionName={"invoices"}
        onChange={handleChange("invoices")}
        classes={classes}
      />
      <ProofOfPaymentAccordion
        expanded={expanded}
        accordionName={"pop"}
        onChange={handleChange("pop")}
        classes={classes}
      />
    </div>
  );
});

export default ViewTransactionDetails;
