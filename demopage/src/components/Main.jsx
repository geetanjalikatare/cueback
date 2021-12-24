import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";

const Main = () => {
  const [data, setData] = useState([]);
  const [more, setMore] = useState(true);
  const [start, setStart] = useState(0);
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
            start: 1,
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
        setData(data.concat(res.data.Details.data));
        setStart(data.length + 1);
        console.log("i am running", start);
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
        setStart(data.length + 1);
        console.log("hey i am in useeffect and am  running", start);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={more}
        loader={<h4>Loading...</h4>}
      >
        {data.map((item) => {
          return <Card data={item} />;
        })}
      </InfiniteScroll>
    </div>
  );
};
export default Main;
