import React from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import { ArrowDropUp, ArrowDropDown } from "@mui/icons-material";
import { useState } from "react";

const Actions = ({ data }) => {
  const [anchorEl, setAnchorEl] = useState(null);
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
        Action {anchorEl ? <ArrowDropUp /> : <ArrowDropDown />}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        style={{ border: "1px solid #2d7da5" }}
      >
        {Object.keys(data).map((i, index) => {
          return (
            <MenuItem
              onClick={handleClose}
              
              key={index}
              style={{
                borderBottom: "1px solid #2d7da5",
               
              }}
            >
              {data[i]}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};
export default Actions;
