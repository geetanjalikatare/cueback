import { Box, Typography } from "@mui/material";
import React from "react";

const Description = ({ data }) => {
  
  return (
    <Box style={{ height: "120px" }}>
      <Typography
        style={{ height: "116px", overflow: "hidden" }}
        dangerouslySetInnerHTML={{ __html: data }}
      >   
      </Typography>
      {data.length>352 &&<a href="##" style={{color:"RGB(45, 125, 165)"}}>See more</a> }
    </Box>
  );
};
export default Description;
