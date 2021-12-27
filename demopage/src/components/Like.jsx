import axios from "axios";
import React, { useEffect } from "react";

const Like = () => {
  useEffect(() => {
    const headers = {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": localStorage.getItem("token"),
      };
      const data = {
        details : {
          nid: "8519",
          type: "0",
          to_uid: "8519",
          who_else_was_there: "",
          attr_id: "0"
            } 
      }
    axios
      .post("https://public.cuebackqa.com/api/update_likes", data, {
        headers: headers,
      })
      .then((res) => {
        console.log("like", res);
      }).catch((err)=>{console.log("er",err)})
  });
  return(
      <h1>hello like page</h1>
  )
};
export default Like;