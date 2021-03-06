import { useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import SearchField from "../../../shared/components/SearchField";
import MobxInvoiceStore from "../../../shared/stores/InvoiceStore";
import { Button } from "@material-ui/core";
import MenuComp from "../../../shared/components/MenuComp";
import QuotesTable from "./QuotesTable";
import { useHistory } from "react-router-dom";
import PageToolbar from "../../../shared/components/PageToolbar";
import QuoteTableColumn from "../../../shared/interfaces/QuoteTableColumn";
// import { quotes } from "../../dummy_data/dummy_data";
import QuoteMenuComp from "./QuoteMenuComp";
import MobxActiveSalesAccordionStore from "../../../shared/stores/ActiveSalesAccordionStore";
import Quote from "../../../shared/interfaces/Quote";
import { db } from "../../../shared/services/firebase";
import EnhancedQuoteTable from "./EnhancedQuoteTable";
import ContainterComp from "../../../shared/components/ContainterComp";

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

// Table Component Properties
const columns: QuoteTableColumn[] = [
  { id: "status", label: "", minWidth: 50 },
  { id: "customerName", label: "Customer Name", minWidth: 170 },
  { id: "quoteNumber", label: "Quote Number", minWidth: 170 },
  { id: "issueDate", label: "Quote Issue Date", minWidth: 170 },
  { id: "dueDate", label: "Quote Due Date", minWidth: 170 },
];

const Quotes = () => {
  const classes = useStyles();
  const store = MobxInvoiceStore;
  const activeAccordionStore = MobxActiveSalesAccordionStore;
  const history = useHistory();
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    document.title = "NAMCOR - Quotations";
    // Setting the sales and purchase details to quote
    activeAccordionStore.setActiveStage("quotes");

    // Get quotes
    getQuotes();
    return () => {};
  }, []);

  const getQuotes = async () => {
    const $db = await db.collection("quotations");
    return $db.onSnapshot((querySnapshot: any) => {
      const docs = querySnapshot.docs.map((doc: any) => {
        return { id: doc.id, ...doc.data() };
      });
      setQuotes(docs);
    });
  };

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

  const onViewQuote = (quote: Quote) => {
    history.push(`/admin/sales-purchase-details/${quote.id}`);
  };

  return (
    <ContainterComp>
      {/* <PageToolbar
        title="Quote"
        buttons={
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/admin/create-product")}
          >
            + New Quote
          </Button>
        }
      /> */}

      <Box className={classes.flexCenter}>
        <SearchField
          data={quotes}
          feature={"customerName"}
          onChange={(event: any, value: any) =>
            handleSearchChange(event, value)
          }
        />
      </Box>

      {/* <Box className={classes.box}>
        <QuotesTable columns={columns} rows={quotes}>
          <QuoteMenuComp />
        </QuotesTable>
      </Box> */}

      <Box className={classes.box}>
        <EnhancedQuoteTable onViewQuote={onViewQuote} data={quotes} />
      </Box>
    </ContainterComp>
  );
};

export default Quotes;
