import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionActions from "@material-ui/core/AccordionActions";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import {
  DeleteOutlined,
  FontDownloadOutlined,
  GetAppOutlined,
  ViewAgendaSharp,
  VisibilityOutlined,
} from "@material-ui/icons";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

const InvoicePOP = (props: any) => {
  const { classes } = props;

  return (
    <Box className={classes.accordion}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Proof of Payment (Files: 2)
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionContent}>
          <Card variant="outlined" className={classes.dspPop}>
            <CardActionArea>
              <CardContent>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  component="p"
                >
                  Payment made with Nedbank, Date: 2019-09-03
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <IconButton aria-label="download" className={classes.margin}>
                <GetAppOutlined fontSize="small" />
              </IconButton>
              <IconButton aria-label="view" className={classes.margin}>
                <VisibilityOutlined fontSize="small" />
              </IconButton>
              <IconButton aria-label="download" className={classes.margin}>
                <DeleteOutlined fontSize="small" />
              </IconButton>
            </CardActions>
          </Card>
          <Card variant="outlined" className={classes.dspPop}>
            <CardActionArea>
              <CardContent>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  component="p"
                >
                  Payment made with Nedbank, Date: 2019-09-03
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <IconButton aria-label="download" className={classes.margin}>
                <GetAppOutlined fontSize="small" />
              </IconButton>
              <IconButton aria-label="view" className={classes.margin}>
                <VisibilityOutlined fontSize="small" />
              </IconButton>
              <IconButton aria-label="download" className={classes.margin}>
                <DeleteOutlined fontSize="small" />
              </IconButton>
            </CardActions>
          </Card>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button size="small" variant="contained" color="primary">
            Upload Proof of Payment
          </Button>
        </AccordionActions>
      </Accordion>
    </Box>
  );
};

export default InvoicePOP;
