import React from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";

const Actions = ({data}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{
          border: "1px solid RGB(45, 125, 165)",
          color: "RGB(45, 125, 165)",
        }}
      >
        Action
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        style={{ border: "1px solid green" }}
      >
        {Object.keys(data).map((i,index) => {
          return (
            <MenuItem onClick={handleClose} key={index}>
              {data[i]}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};
export default Actions;
