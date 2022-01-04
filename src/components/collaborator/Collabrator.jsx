import { Avatar, Grid, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const Collabrator = ({ collab, authorColor }) => {
  const [show, setShow] = useState(0);
  return (
    <Box style={{ paddingBottom: "20px" }}>
      <Button
        onClick={() => {
          setShow(show + 1);
        }}
      >
        Hide Collabrator (1) ^
      </Button>
      {collab.map((item,index) => {
        return (
          <Grid container style={{ display: show % 2 === 0 ? "" : "none" }}>
            <Grid item>
              <Avatar
                style={{ width: "50px", height: "50px" }}
                alt="Remy Sharp"
                src={item.uri}
              ></Avatar>
            </Grid>
            <Grid
              item
              style={{
                backgroundColor: authorColor[item.uid],
                height: "30px",
              }}
            >
              {item.field_first_name_value} {item.field_last_name_value}
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
};
export default Collabrator;
