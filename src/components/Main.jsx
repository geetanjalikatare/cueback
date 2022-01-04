import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./card/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import { Grid, Box ,CircularProgress} from "@mui/material";
import Filters from "./filters/Filters";
import { useSelector } from "react-redux";
import { selectFilters } from "../Redux/reducers/MemorySlice";
import Header from "./header/Header";
import Menu from "./menu/Menu";

const Main = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const filters = useSelector(selectFilters);

  const fetchMoreData = () => {
    const obj = {
      type: "feed",
      filter: {
        mystories: {
          me: filters["Me"],
          friend: filters["My Friends"],
          others: filters["Non Friends"],
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
        start: page,
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
    axios
      .post("https://cuebackqa.com/api/timeline/list", obj, {
        headers: headers,
      })
      .then((res) => {
        setPage(page + 1);
        setData(data.concat(res.data.Details.data))
              })
      .catch((err) => {
      });
  };

  useEffect(() => {
    const obj = {
      type: "feed",
      filter: {
        mystories: {         
          me: filters["Me"],
          friend: filters["My Friends"],
          others: filters["Non Friends"],
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
        start: page,
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
    axios
      .post("https://cuebackqa.com/api/timeline/list", obj, {
        headers: headers,
      })
      .then((res) => {
        setPage(page + 1);
        setData(res.data.Details.data.concat(data))   
      })
      .catch((err) => {
      });
  }, [filters]);
  return (
    <Box>
      <Header />
      <Grid container>
        <Grid item xs={2} style={{ backgroundColor: "#e6f3f4" }}>
          <Box style={{ marginTop: "50px" }}>
            {" "}
            <Menu />
          </Box>
        </Grid>
        <Grid item xs={7} style={{ marginTop: "60px" }}>
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
            {data.map((item, index) => {
              return <Card data={item} key={index} />;
            })}
          </InfiniteScroll>
        </Grid>
        <Grid item xs={3} style={{ backgroundColor: "#e6f3f4" }}>
          <Filters />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Main;