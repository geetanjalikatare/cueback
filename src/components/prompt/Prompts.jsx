import React from "react";
import Prompt from "./Prompt";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Prompts = ({ data }) => {
  var count = 0;
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
      style={{
        border: "1px solid green",
        borderRadius: "10px",
        backgroundColor: "#70a887",
        height: "183px",
        width: "687px",
        padding: "10px 50px 10px 75px",
      }}
    >
      <div class="carousel-inner">
        {Object.keys(data).map((i, index) => {
          count++;
          return (
            <div
              className={
                count === 1 ? "carousel-item active" : "carousel-item "
              }
            >
              <Prompt value={data[i]} />
            </div>
          );
        })}
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <div style={{
            borderRadius: "25px",
            color: "#2d7ca7",
            padding:"5px",
            backgroundColor:"white"
          }}>
        <span  aria-hidden="true"> <ArrowBackIosNewIcon/></span>
        <span class="visually-hidden">Previous</span></div>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <div
          style={{
            borderRadius: "25px",
            color: "#2d7ca7",
            padding:"5px",
            backgroundColor:"white"
          }}
        >
          <span aria-hidden="true"><ArrowForwardIosIcon /></span>
          <span class="visually-hidden">Next</span>
        </div>
      </button>
    </div>
  );
};
export default Prompts;
