import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import { DeleteOutlined, DescriptionOutlined } from "@material-ui/icons";
import clsx from "clsx";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // Custom card header
    dspFlex: {
      display: "flex",
    },
    spaceBtwn: {
      justifyContent: "space-between",
    },
    padding: {
      padding: theme.spacing(2, 1),
    },
    avatar: {
      backgroundColor: "#fff",
      color: "rgba(0, 0, 0, 0.87)",
      marginRight: 5,
    },
    typography: {
      maxWidth: 300,
      overflow: "hidden",
      lineHeight: "24px",
      maxHeight: "24px",
      whiteSpace: "nowrap",
      fontWeight: 400,
      border: "1px solid #fff",
      transition: ".3s all ease",
      borderRadius: 5,

      "&:hover, &:focus": {
        borderColor: grey[400],
        padding: theme.spacing(0, 1),
      },
    },
  })
);

interface Props {
  title: string;
  subheader: string;
  onDelete: () => void;
}

const EditableCardHeader = (props: Props) => {
  const { title, subheader, onDelete } = props;
  const classes = useStyles();
  return (
    <Box className={clsx(classes.dspFlex, classes.spaceBtwn, classes.padding)}>
      {/* Left */}
      <Box className={classes.dspFlex}>
        <Avatar className={classes.avatar}>
          <DescriptionOutlined />
        </Avatar>
        <Box>
          <Typography
            className={classes.typography}
            variant="body2"
            component="div"
            contentEditable={true}
            suppressContentEditableWarning={true}
          >
            {title}
          </Typography>
          <Typography
            className={classes.typography}
            variant="button"
            component="div"
            color="textSecondary"
            contentEditable={true}
            suppressContentEditableWarning={true}
          >
            {subheader}
          </Typography>
        </Box>
      </Box>
      {/* Actions */}
      <Box>
        <IconButton aria-label="delete" onClick={onDelete}>
          <DeleteOutlined />
        </IconButton>
      </Box>
    </Box>
  );
};

export default EditableCardHeader;
