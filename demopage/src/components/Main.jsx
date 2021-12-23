import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Main = () => {
  const [data,setData] = useState([]);
  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      "X-CSRF-TOKEN":localStorage.getItem("token")
    };
    axios
      .post(
        "https://public.cuebackqa.com/api/timeline/list",
        JSON.stringify({
          type: "feed",
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
        }),
        { headers: headers }
      )
      .then((res) => {
        setData(res.data.Details.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
     {data.map((item)=>{
       return(
         <Card data={item} />
       )
     })}
    </div>
  );
};
export default Main;
