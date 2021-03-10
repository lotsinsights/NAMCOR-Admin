import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import {
  AssignmentOutlined,
  AttachFileOutlined,
  DeleteOutlined,
  EditOutlined,
  MoreVert,
  NoteAddOutlined,
  PageviewOutlined,
  PublishOutlined,
  ReceiptOutlined,
  SendOutlined,
  ThumbDownAltOutlined,
  ThumbsUpDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import DeleteConfirmationDialog from "../../../shared/components/ConfirmationDialog";
import MobxProductStore from "../../../shared/stores/ProductStore";

export default function OrderMenuComp(props: any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  let history = useHistory();
  const store = MobxProductStore;
  const { onViewOrder, row } = props;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onEdit = () => {
    console.log("Editting request");

    console.log("Row => ", row);
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
        <MenuItem onClick={() => onViewOrder(row)}>
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
        {/* Approval */}
        <MenuItem onClick={() => onViewOrder(row)}>
          <ListItemIcon>
            <ReceiptOutlined fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">
            Convert Purchase order to <br />
            Sales Order
          </Typography>
        </MenuItem>
        <MenuItem onClick={() => onEdit()}>
          <ListItemIcon>
            <ThumbUpAltOutlined fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Reaffirm Purchase order</Typography>
        </MenuItem>
        <MenuItem onClick={() => onEdit()}>
          <ListItemIcon>
            <ThumbDownAltOutlined fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Cancel Purchase order</Typography>
        </MenuItem>
      </Menu>
      <DeleteConfirmationDialog store={store} />
    </>
  );
}
