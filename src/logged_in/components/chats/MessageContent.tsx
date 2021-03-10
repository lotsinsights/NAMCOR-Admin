import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import { Paper } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      //   display: "block",
    },
    accordion: {
      marginBottom: theme.spacing(1),
    },
    accordionDetails: {
      display: "block",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: "20%",
      flexShrink: 0,
      marginLeft: theme.spacing(1),
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
      overflow: "hidden",
      textOverflow: "ellipsis",
    },

    // Message details
    toolbar: {
      display: "block",
    },
    body: {
      display: "block",
      marginBottom: theme.spacing(2),
    },
    attachment: {
      display: "block",
      marginBottom: theme.spacing(2),
    },
    chip: {
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(1),
    },
    hr: {
      marginTop: 0,
      marginBottom: theme.spacing(2),
      borderColor: theme.palette.grey[100],
    },
  })
);

const MessageContent = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h6">
        How Autodesk reduced manual processes by 90%
      </Typography>
      <Accordion
        className={classes.accordion}
        expanded={expanded === "panel0"}
        onChange={handleChange("panel0")}
      >
        <AccordionSummary
          //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel0bh-content"
          id="panel0bh-header"
        >
          <Avatar>KA</Avatar>
          <Typography className={classes.heading}>
            Katherine at Airtable
          </Typography>
          <Typography className={classes.secondaryHeading}>
            How Autodesk reduced manual processes by 90%
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <hr className={classes.hr} />
          <Box className={classes.body}>
            <Typography>
              Dear Katherine <br /> <br />
            </Typography>
            <Typography>
              Autodesk Technology Centers help customers, industry leaders,
              academics and startups create cutting edge tech together. Read on
              to learn how Autodesk used Airtable to reduce email, streamline
              work happening across different tools, and make their team more
              efficient. Read on <br /> <br />
            </Typography>
            <Typography>
              Kind regards <br />
              David
            </Typography>
          </Box>
          <Box className={classes.attachment}>
            <Typography variant="button" display="block" gutterBottom>
              Attachments
            </Typography>
            <Chip
              className={classes.chip}
              label="Requirements Documents Autodesk Mobile App"
              onDelete={() => console.log("Delete")}
            />
            <Chip
              className={classes.chip}
              label="Specification Document for Autodesk 2021"
              onDelete={() => console.log("Delete")}
            />
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className={classes.accordion}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Avatar>DA</Avatar>
          <Typography className={classes.heading}>
            More information needed
          </Typography>
          <Typography className={classes.secondaryHeading}>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Hi Katherine; I'm aware that Autodesk Technology Centers help
            customers, industry leaders, academics and startups create cutting
            edge tech together. But..
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className={classes.accordion}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Avatar>DA</Avatar>
          <Typography className={classes.heading}>
            More information needed
          </Typography>
          <Typography className={classes.secondaryHeading}>
            Hi Katherine; I'm aware that Autodesk Technology Centers help
            customers, industry leaders, academics and startups create cutting
            edge tech together. But..
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Hi Katherine; I'm aware that Autodesk Technology Centers help
            customers, industry leaders, academics and startups create cutting
            edge tech together. But..
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className={classes.accordion}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Avatar>KA</Avatar>
          <Typography className={classes.heading}>
            More information on Autocad as per request
          </Typography>
          <Typography className={classes.secondaryHeading}>
            Hi David; Read on to learn how Autodesk used Airtable to reduce
            email, streamline work happening across different tools, and make
            their team more efficient
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MessageContent;
