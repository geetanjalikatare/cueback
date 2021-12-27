import * as React from "react";
import { Box } from "@mui/material";

export default function StandardImageList({ data }) {
  var i = 0;

  return (
    <Box>
      {data.map((item) => {
        i++;
        if (i <= 3) {
          return (
            <>
              <img
                src={item.url}
                alt={item.file_title}
                style={{
                  height: "170px",
                  width: "200px",
                  borderRadius: "10px",
                  margin: "10px",
                }}
              ></img>
              {data.length > 3 && i === 3 && (
                <p
                  style={{
                    position: "absolute",
                    marginLeft: "100px",
                    color: "white",
                    fontSize: "30px",
                  }}
                >
                  more
                </p>
              )}
            </>
          );
        }
      })}
    </Box>
  );
}
