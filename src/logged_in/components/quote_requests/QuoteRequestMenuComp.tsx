import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import {
  DeleteOutlined,
  EditOutlined,
  MoreVert,
  NoteAddOutlined,
  PageviewOutlined,
  PublishOutlined,
  ThumbDownAltOutlined,
  ThumbsUpDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import DeleteConfirmationDialog from "../../../shared/components/ConfirmationDialog";
import MobxProductStore from "../../../shared/stores/ProductStore";
import { useSnackbar, VariantType } from "notistack";

export default function QuoteRequestMenuComp(props: any) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  let history = useHistory();
  const store = MobxProductStore;
  const { onViewRequest, row } = props;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onEdit = () => {
    const variant: VariantType = "success";
    enqueueSnackbar("Editting Request", { variant });
  };

  return (
    <>
      <IconButton
        aria-label="more"
        aria-controls="more-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVert fontSize="default" />
      </IconButton>
      <Menu
        id="more-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* Modification */}
        <MenuItem onClick={() => onViewRequest(row)}>
          <ListItemIcon>
            <PageviewOutlined fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">View </Typography>
        </MenuItem>
        <MenuItem onClick={() => onEdit()}>
          <ListItemIcon>
            <EditOutlined fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Edit </Typography>
        </MenuItem>
        <MenuItem onClick={() => store.openDeleteConfirmationDialog()}>
          <ListItemIcon>
            <DeleteOutlined fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Delete</Typography>
        </MenuItem>
        <hr />
        {/* Quotation */}
        <MenuItem onClick={() => onEdit()}>
          <ListItemIcon>
            <PublishOutlined fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Upload quote</Typography>
        </MenuItem>
        <MenuItem onClick={() => onViewRequest(row)}>
          <ListItemIcon>
            <NoteAddOutlined fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Create quote</Typography>
        </MenuItem>

        <hr />
        {/* Approval */}
        <MenuItem onClick={() => onViewRequest(row)}>
          <ListItemIcon>
            <ThumbUpAltOutlined fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Approve request</Typography>
        </MenuItem>
        <MenuItem onClick={() => onEdit()}>
          <ListItemIcon>
            <ThumbDownAltOutlined fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Reject request</Typography>
        </MenuItem>
      </Menu>
      <DeleteConfirmationDialog store={store} />
    </>
  );
}
