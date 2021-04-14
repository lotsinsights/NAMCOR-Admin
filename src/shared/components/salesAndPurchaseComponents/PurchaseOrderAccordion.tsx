import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Box, Button } from "@material-ui/core";
import { AccordionActions } from "@material-ui/core";
import {
  CancelOutlined,
  CloudUploadOutlined,
  CommentOutlined,
  UpdateOutlined,
} from "@material-ui/icons";
import AttachedDocument from "../AttachedDocument";
import { useState, useCallback, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase";
import MobxFileUploadDialogStore from "../../stores/FileUploadDialogStore";

interface Props {
  expanded: any;
  onChange: (event: any, isExpanded: any) => void;
  accordionName: string;
  classes: any;
}

const PurchaseOrderAccordion = (props: Props) => {
  // Store
  const fileUploadStore = MobxFileUploadDialogStore;

  // Props
  const { expanded, accordionName, onChange, classes } = props;

  // States
  const [hasFetchedData, setHasFetchedData] = useState(false);
  const [data, setData] = useState<any>();

  // Variables
  const { id: docID } = useParams<{ id: string }>();
  const collection = "purchaseOrders";

  // Upload files to firebase
  const uploadFiles = () => {
    // Update collection name in file upload store
    fileUploadStore.setCollectionName(collection);
    // Update document ID in file upload store
    fileUploadStore.setDocumentID(docID);
    // Open dialog
    fileUploadStore.openFileUploadDialog();

    console.warn("Remove this function from component");
  };

  // Fetch data from firebase
  const fetchData = useCallback(() => {
    if (hasFetchedData) return;
    setHasFetchedData(true);
    db.collection(collection)
      .doc(docID)
      .onSnapshot((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setData({ id: docID, ...doc.data() });
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      });
  }, [hasFetchedData, docID]);

  // Checks if the accordion expanded then,
  // fetched data + other tasks.
  const isExpanded = useCallback(() => {
    if (expanded !== accordionName) return;
    fetchData();
  }, [accordionName, expanded, fetchData]);

  // Use effect react hook
  useEffect(() => {
    isExpanded();
    return () => {};
  }, [expanded, isExpanded]);

  return (
    <Accordion
      expanded={expanded === accordionName}
      onChange={(e) => onChange(e, accordionName)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel-${accordionName}-content`}
        id={`panel-${accordionName}-header`}
      >
        <Typography className={classes.heading}>Purchase order</Typography>
        <Typography className={classes.secondaryHeading}>
          All documents related to purchase orders are here
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        {/* Documents */}
        <Typography variant="button">Documents</Typography>
        <Box className={classes.attachments}>
          {data &&
            data.attachments.map((attachment: any, index: number) => {
              return (
                <Fragment key={index}>
                  <AttachedDocument
                    collectionName={collection}
                    documentID={docID}
                    fileName={attachment.name}
                    fileSrc={attachment.url}
                  />
                </Fragment>
              );
            })}
        </Box>
      </AccordionDetails>
      <AccordionActions className={classes.accordionActions}>
        <Button
          variant="text"
          color="default"
          className={classes.button}
          startIcon={<UpdateOutlined />}
        >
          Request for Purchase order
        </Button>
        <Button
          variant="text"
          color="default"
          className={classes.button}
          startIcon={<UpdateOutlined />}
        >
          Convert to Sales order
        </Button>
        <Button
          variant="text"
          color="default"
          className={classes.button}
          startIcon={<CloudUploadOutlined />}
          onClick={uploadFiles}
        >
          Upload
        </Button>
        <Button
          variant="text"
          color="default"
          className={classes.button}
          startIcon={<CommentOutlined />}
        >
          Comments
        </Button>
        <Button
          variant="text"
          color="default"
          className={classes.button}
          startIcon={<CancelOutlined />}
        >
          Cancel Order
        </Button>
      </AccordionActions>
    </Accordion>
  );
};

export default PurchaseOrderAccordion;
