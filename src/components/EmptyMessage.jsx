import React from "react";
import { Box } from "@mui/material";
import { useEffect } from "react";
import axios from "axios"

const EmptyMessage = () => {
    const obj = {
        type: "feed",
        filter: {
          mystories: {
            me: 1,
            friend: 0,
            others: 0,
            groups: {
              1: 0,
              82: 0,
              136: 0,
              148: 0,
            },
          },
          save_filters: 0,
        },
        configurationTimestamp: "0",
        searchTerm: {
          prompt_pagination: 0,
          start: 0,
          length: 10,
          searchString: "",
          last_memory_date: "",
          request_type: "older",
        },
        randomPrompts: 0,
      };
      const headers = {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": localStorage.getItem("token"),
      };
    useEffect(()=>{
        axios
      .post("https://cuebackqa.com/api/timeline/list", obj, {
        headers: headers,
      })
      .then((res) => {
      
      })
      .catch((err) => {
       
      });
    })
  return (
      <p>jii</p>
    // <Box
    //   style={{
    //     backgroundColor: "white",
    //     height: "80px",
    //     width: "700px",
    //     fontWeight:"bolder",
    //     marginLeft: "20px",
    //     padding:"20px"
    //   }}
    // >
    //   <p>
    //     There are no memories or cues to display at this moment. Please check
    //     your filter settings and try again.
    //   </p>
    // </Box>
  );
};
export default EmptyMessage;
