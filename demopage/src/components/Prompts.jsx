import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import Prompt from "./Prompt";

const Prompts = ({ data }) => {
  console.log(Object.keys(data));

  const [hover, setHover] = useState(false);
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
      style={{
        border: "1px solid green",
        borderRadius: "10px",
        backgroundColor: "#70a887",
        height: "200px",
        width: "650px",
        padding: "10px 60px 10px 75px",
      }}
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          rtujtjuty
        </div>
        <div class="carousel-item ">dhgdhb</div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default Prompts;
