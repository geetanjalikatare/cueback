import { Box } from "@mui/material";
import React, { useState } from "react";
import FilterButton from "./FilterButton";
import { useDispatch, useSelector } from "react-redux";
import { addFilter, selectFilters } from "../../Redux/reducers/MemorySlice";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Filters = () => {
  const dispatch = useDispatch();
  const f = useSelector(selectFilters);
  const filters = ["All", "Me", "My Friends", "Non Friends"];
  const friendCircles = ["Close Friends", "CB"];
  const [open, setOpen] = useState(1);
  const [filter, setFilter] = useState({
    All: 1,
    Me: 1,
    "My Friends": 1,
    "Non Friends": 1,
  });
  const selectFilter = (val) => {
    if (val === "Me") {
      filter.Me += 1;
      setFilter({ ...filter });
    } else if (val === "My Friends") {
      filter["My Friends"] += 1;
      setFilter({ ...filter });
    } else if (val === "Non Friends") {
      filter["Non Friends"] += 1;
      setFilter({ ...filter });
    }
    dispatch(addFilter(filter));
  };

  return (
    <Box style={{ paddingTop: "50px", paddingLeft: "20px" }}>
      <h6
        onClick={() => {
          setOpen(open + 1);
        }}
        style={{ marginBottom: "20px" }}
      >
        Filters{" "}
        <ArrowForwardIosIcon
          style={{
            transform: open % 2 === 0 ? "rotate(267deg)" : "rotate(90deg)",
          }}
        />
      </h6>
      <Box style={{ display: open % 2 !== 0 ? "" : "none" }}>
        {filters.map((item) => {
          return <FilterButton value={item} fun={() => selectFilter(item)} isClicked={f[item]}/>;
        })}
        <p style={{ margin: "10px 0px 10px 0px" }}>Friend Circles</p>
        {friendCircles.map((item) => {
          return <FilterButton value={item} />;
        })}
      </Box>
    </Box>
  );
};
export default Filters;
