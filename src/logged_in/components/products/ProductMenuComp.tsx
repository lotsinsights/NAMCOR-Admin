import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import {
  DeleteOutlined,
  EditOutlined,
  MoreVert,
  PageviewOutlined,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import DeleteConfirmationDialog from "../../../shared/components/ConfirmationDialog";
import MobxProductStore from "../../../shared/stores/ProductStore";

export default function ProductMenuComp(props: any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  let history = useHistory();

  const { onViewProduct, onEditProduct, onDeleteProduct, row } = props;
  const store = MobxProductStore;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        <MenuItem onClick={() => onViewProduct(row)}>
          <ListItemIcon>
            <PageviewOutlined fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">View</Typography>
        </MenuItem>
        <MenuItem onClick={onEditProduct}>
          <ListItemIcon>
            <EditOutlined fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Edit</Typography>
        </MenuItem>
        <MenuItem onClick={() => onDeleteProduct(row)}>
          <ListItemIcon>
            <DeleteOutlined fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Delete</Typography>
        </MenuItem>
      </Menu>
      <DeleteConfirmationDialog store={store} />
    </>
  );
}
