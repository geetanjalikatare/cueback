import { Button } from "@mui/material";
import React from "react";

const Collection = ({ value }) => {
  return (
    <Button
      variant="contained"
      style={{ backgroundColor: "RGB(168, 186, 219)", borderRadius: "20px",paddingBottom: "20px" }}
    >
      <span style={{ color: "white", fontSize: "14px", fontWeight: "bolder" }}>
        In Collection{" "}
        <span
          style={{
            color: "#2d7da5",
            fontSize: "14px",
            fontWeight: "bolder",
            textDecoration: "underline",
          }}
        >
          {"  "} {value}
        </span>
      </span>
    </Button>
  );
};
export default Collection;
