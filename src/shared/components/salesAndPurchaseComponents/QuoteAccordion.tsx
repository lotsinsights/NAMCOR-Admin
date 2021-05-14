import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Box, Button } from "@material-ui/core";
import { AccordionActions } from "@material-ui/core";
import {
  BuildOutlined,
  CloudUploadOutlined,
  CommentOutlined,
} from "@material-ui/icons";
import AttachedDocument from "../AttachedDocument";
import MobxFileUploadDialogStore from "../../stores/FileUploadDialogStore";
import { useState, Fragment, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase";

interface Props {
  expanded: any;
  onChange: (event: any, isExpanded: any) => void;
  accordionName: string;
  classes: any;
}

const QuoteAccordion = (props: Props) => {
  // Store
  const fileUploadStore = MobxFileUploadDialogStore;

  // Props
  const { expanded, accordionName, onChange, classes } = props;

  // States
  const [hasFetchedData, setHasFetchedData] = useState(false);
  const [data, setData] = useState<any>();

  // Variables
  const { id: docID } = useParams<{ id: string }>();
  const collection = "quotations";

  // Upload files to firebase
  const uploadFiles = () => {
    // Update collection name in file upload store
    fileUploadStore.setCollectionName(collection);
    // Update document ID in file upload store
    fileUploadStore.setDocumentID(docID);
    // Open dialog
    fileUploadStore.openFileUploadDialog();
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
        <Typography className={classes.heading}>Quotation</Typography>
        <Typography className={classes.secondaryHeading}>
          The created quotation for the request above
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
        {/* <Button
          variant="text"
          color="default"
          className={classes.button}
          startIcon={<ThumbUpAltOutlined />}
        >
          Approve
        </Button>
        <Button
          variant="text"
          color="default"
          className={classes.button}
          startIcon={<ThumbDownAltOutlined />}
        >
          Reject
        </Button> */}
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
          startIcon={<BuildOutlined />}
        >
          Build
        </Button>
        <Button
          variant="text"
          color="default"
          className={classes.button}
          startIcon={<CommentOutlined />}
        >
          Comments
        </Button>
      </AccordionActions>
    </Accordion>
  );
};

export default QuoteAccordion;
