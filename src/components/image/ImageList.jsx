import * as React from "react";
import { Box } from "@mui/material";

export default function StandardImageList({ data }) {
  var width="";
  
  if(data.length===1) width="97%";
  else if(data.length ===2) width="45%"
  else width = "30%"
  return (
    <Box>
      {data.map((item, index) => {
        if (index + 1 <= 3) {
          return (
            <img
              src={item.url}
              alt={item.file_title}
              style={{
                height: "250px",
                width: width,
                borderRadius: "10px",
                marginLeft:"10px"
              }}
            ></img>
          );
        }
      })}
    </Box>
  );
}
