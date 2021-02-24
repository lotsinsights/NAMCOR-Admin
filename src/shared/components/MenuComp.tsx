import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import { MoreVert } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

export default function MenuComp() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  let history = useHistory();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const viewInvoice = () => {
    // Route to invoice details
    history.push("/admin/invoice-details");
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
        <MenuItem onClick={viewInvoice}>View Invoice</MenuItem>
        <MenuItem onClick={handleClose}>Approve Invoice</MenuItem>
        <MenuItem onClick={handleClose}>Reject Invoice</MenuItem>
        <MenuItem onClick={handleClose}>Attach POP</MenuItem>
        <MenuItem onClick={handleClose}>Reject POP</MenuItem>
        <hr />
        {/* <MenuItem onClick={handleClose}>
          <Button variant="contained" color="primary">
            Send to finance
          </Button>
        </MenuItem> */}
        <MenuItem onClick={handleClose}>Send to Finance</MenuItem>
      </Menu>
    </>
  );
}
