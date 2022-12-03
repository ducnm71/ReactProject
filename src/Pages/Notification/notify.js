import React from "react";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import "./notify.css";

const Notify = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="dropdown">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Badge badgeContent={4} variant="dot" color="primary">
          <NotificationsIcon
            color="black"
            style={{ width: "40px", height: "40px", marginTop: "-8px" }}
          />
        </Badge>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          Your teacher just added a new exercise<br></br>5 minutes ago
        </MenuItem>
        <MenuItem onClick={handleClose}>
          You have an unfinished assignment<br></br>5 minutes ago
        </MenuItem>
        <MenuItem onClick={handleClose}>
          There will be a test early next week<br></br>5 minutes ago
        </MenuItem>
        <MenuItem onClick={handleClose}>
          The teacher just finished marking the final exam, see the score now
          <br></br>5 minutes ago
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Notice of payment of tuition fees for the 1st semester<br></br>5
          minutes ago
        </MenuItem>
        <MenuItem onClick={handleClose}>
          The whole class is absent from Python class on 11/30/2022<br></br>5
          minutes ago
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Notify;
