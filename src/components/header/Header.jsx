import { Box, Button, Grid, Avatar } from "@mui/material";
import styled from "styled-components";
import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
const StringInput = styled.input`
  border: 1px solid white;
  width: "550 px";
  &:focus {
    outline: none;
    border-color: white;
  }
`;
const Header = () => {
  return (
    <Box
      style={{
        backgroundColor: "RGB(46, 180, 195)",
        height: "60px",
        padding: "12px",
      }}
    >
      <Grid container>
        <Grid item xs={2}>
          <img
            width="115px"
            alt="my stories matter"
            src="https://public.cuebackqa.com/sites/public.cuebackqa.com/default/files//instance_files/header_logo/header-logo-13684.png"
          />
        </Grid>
        <Grid item xs={7}>
          <Box
            style={{
              border: "1px solid white",
              borderRadius: "25px",
              width: "590px",
              height: "41px",
              backgroundColor: "white",
              marginLeft:"20px"
            }}
          >
            <Button
              variant="text"
              style={{
                backgroundColor: "RGB(235, 93, 104)",
                color: "white",
                borderTopLeftRadius: "20px",
                borderBottomLeftRadius: "20px",
                height:"40px",
                width:"124px"
              }}
            >
              Memory
            </Button>
            <StringInput placeholder="Search Memory..." />
            <Button style={{ color: "black", float: "right" }}>
              <SearchIcon />
            </Button>
          </Box>
        </Grid>
        <Grid item xs={3} >
          <Box style={{borderLeft:"1px solid white",float:"right",paddingLeft:"20px"}}> <Avatar
              style={{ width: "40px", height: "40px",}}
              alt="Remy Sharp"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            />
            </Box>
       
        </Grid>
      </Grid>
    </Box>
  );
};
export default Header;
