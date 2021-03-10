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

export default function InvoiceMenuComp(props: any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  let history = useHistory();
  const store = MobxProductStore;
  const { onViewInvoice, row } = props;

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
        <MenuItem onClick={() => onViewInvoice(row)}>
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
        <MenuItem onClick={() => onViewInvoice(row)}>
          <ListItemIcon>
            <ThumbUpAltOutlined fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Approve invoice</Typography>
        </MenuItem>
        <MenuItem onClick={() => onEdit()}>
          <ListItemIcon>
            <ThumbDownAltOutlined fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Reject invoice</Typography>
        </MenuItem>
        <hr />
        {/* Approval */}
        <MenuItem onClick={() => onViewInvoice(row)}>
          <ListItemIcon>
            <AttachFileOutlined fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Attach POP</Typography>
        </MenuItem>
        <MenuItem onClick={() => onEdit()}>
          <ListItemIcon>
            <ReceiptOutlined fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Request POP</Typography>
        </MenuItem>
        <hr />
        <MenuItem onClick={() => onEdit()}>
          <ListItemIcon>
            <SendOutlined fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Send to finance</Typography>
        </MenuItem>
      </Menu>
      <DeleteConfirmationDialog store={store} />
    </>
  );
}
