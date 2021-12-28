import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./card/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import CircularProgress from "@mui/material/CircularProgress";

const Main = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  const fetchMoreData = () => {
    const headers = {
      "Content-Type": "application/json",
      "X-CSRF-TOKEN": localStorage.getItem("token"),
    };
    axios
      .post(
        "https://public.cuebackqa.com/api/timeline/list",
        JSON.stringify({
          type: "feed",
          configurationTimestamp: "0",
          searchTerm: {
            prompt_pagination: 0,
            start: page,
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
        setPage(page + 1);
        setData(data.concat(res.data.Details.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      "X-CSRF-TOKEN": localStorage.getItem("token"),
    };
    const obj = {
      type: "feed",
      configurationTimestamp: "0",
      searchTerm: {
        prompt_pagination: 0,
        start: page,
        length: 10,
        searchString: "",
        last_memory_date: "",
        request_type: "older",
      },
      randomPrompts: 0,
    };
    axios
      .post("https://public.cuebackqa.com/api/timeline/list", obj, {
        headers: headers,
      })
      .then((res) => {
        setPage(page + 1);
        setData(res.data.Details.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
  return (
    <div>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={true}
        loader={
          <CircularProgress
            color="inherit"
            style={{
              position: "absolute",
              marginLeft: "50%",
            }}
          />
        }
      >
        {data.map((item,index) => {
          return <Card data={item} key={index}/>;
        })}
      </InfiniteScroll>
    </div>
  );
};
export default Main;
