import { Box, Button, TextareaAutosize } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { commentCounter } from "../../Redux/reducers/CommentSlice";

const CommentBox = ({ nid }) => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const obj = {
    details: {
      nid: nid,
      type: "my_stories",
      comment: data,
    },
  };
  const headers = {
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": localStorage.getItem("token"),
  };
  const handlePost = (e) => {
    e.preventDefault();
    dispatch(commentCounter());
    axios
      .post("https://cuebackqa.com/api/actions/comment", obj, {
        headers: headers,
      })
      .then((res) => {
        setData("");
      })
      .catch((err) => {
      });
  };
  return (
    <Box>
      <TextareaAutosize
        min={4}
        style={{ width: "628px", height: "118px", borderRadius: "6px" ,border:"1px solid lightgrey"}}
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
        placeholder="Your Comment..."
      />
      <Button
        style={{
          float: "right",
          
          backgroundColor: "RGB(238, 150, 163)",
        }}
        variant="contained"
        onClick={(e) => {
          handlePost(e);
        }}
      >
        {" "}
        <SendIcon />{" "} Post
      </Button>
    </Box>
  );
};
export default CommentBox;
