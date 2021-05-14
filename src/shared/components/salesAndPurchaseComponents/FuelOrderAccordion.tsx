import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Box, Button } from "@material-ui/core";
import { AccordionActions } from "@material-ui/core";
import {
  CloudUploadOutlined,
  CommentOutlined,
  DeleteOutlined,
  UpdateOutlined,
} from "@material-ui/icons";
import AttachedDocument from "../AttachedDocument";
import MobxFeedbackDialogStore from "../../stores/FeedbackDialogStore";
import MobxFileUploadDialogStore from "../../stores/FileUploadDialogStore";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase";
import { Fragment } from "react";

interface Props {
  expanded: any;
  onChange: (event: any, isExpanded: any) => void;
  accordionName: string;
  classes: any;
}

const FuelOrderAccordion = (props: Props) => {
  const { expanded, accordionName, onChange, classes } = props;
  const [hasFetchedData, setHasFetchedData] = useState(false);
  const [data, setData] = useState<any>();
  const { id: docID } = useParams<{ id: string }>();
  const collection = "quotations";

  const feebackStore = MobxFeedbackDialogStore;
  const fileUploadStore = MobxFileUploadDialogStore;

  const giveFeedback = () => {
    feebackStore.openFeedbackDialog();
    console.warn("Remove this function from component");
  };

  const uploadFiles = () => {
    fileUploadStore.openFileUploadDialog();
    console.warn("Remove this function from component");
  };

  const fetchData = useCallback(() => {
    if (hasFetchedData) return;
    setHasFetchedData(true);
    console.log("Fetching data: ", docID);
    const $doc = db.collection(collection).doc(docID).get();
    $doc
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setData({ id: docID, ...doc.data() });
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [hasFetchedData, docID]);

  const isExpanded = useCallback(() => {
    if (expanded !== accordionName) return;
    fetchData();
  }, [accordionName, expanded, fetchData]);

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
        <Typography className={classes.heading}>Fuel order</Typography>
        <Typography className={classes.secondaryHeading}>
          All documents related to fuel orders are here
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
          onClick={giveFeedback}
        >
          Update status
        </Button>
        <Button
          variant="text"
          color="default"
          className={classes.button}
          startIcon={<UpdateOutlined />}
        >
          Update tracking
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
      </AccordionActions>
    </Accordion>
  );
};

export default FuelOrderAccordion;
