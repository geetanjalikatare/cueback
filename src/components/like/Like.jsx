import axios from "axios";
import React, { useState } from "react";
import { Button } from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Like = ({ uid, nid, likeCount, attr_id, type }) => {
  const [click, setClick] = useState(likeCount);
  const headers = {
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": localStorage.getItem("token"),
  };
  const data = {
    details: {
      nid: nid,
      attr_id: attr_id,
      to_uid: uid,
      type: "my_stories",
      like_type: type,
    },
  };
  const handleLike = () => {
    axios
      .post("https://public.cuebackqa.com/api/actions/like", data, {
        headers: headers,
      })
      .then((res) => {
        console.log("like", res);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  const handleUnLike = () => {
    axios
      .post("https://public.cuebackqa.com/api/actions/unlike", data, {
        headers: headers,
      })
      .then((res) => {})
      .catch((err) => {
        console.log("error", err);
      });
  };
  const handleClick = (e) => {
    e.preventDefault();
    click % 2 === 0 ? handleUnLike() : handleLike();
  };

  return (
    <Button
      style={{
        border: type === "comment" ? " " : "1px solid RGB(45, 125, 165)",
        color: "RGB(45, 125, 165)",
        marginLeft: "25px",
      }}
      onClick={(e) => {
        setClick(click + 1);
        handleClick(e);
      }}
    >
      {click % 2 === 0 ? <FavoriteBorderIcon /> : <FavoriteIcon />}
      {click % 2 === 0 ? "Like" : "Liked"}
    </Button>
  );
};
export default Like;
