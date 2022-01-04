import { Box } from "@mui/system";
import React , { useEffect, useState } from "react";
import Comment from "./Comment";
import axios from "axios";
import { useSelector } from 'react-redux';
import { selectCount } from "../../Redux/reducers/CommentSlice";

const Comments = ({nid})=>{
    const [data,setData] =useState([]);
    const count = useSelector(selectCount);
      useEffect(() => {
      
        const headers = {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": localStorage.getItem("token"),
        };
        const obj = {
          details: {
            nid: nid,
            type: "my_stories",
            limit: 2,
            offset: 0,
          },
        };
        axios
          .post("https://public.cuebackqa.com/api/get/comments", obj, {
            headers: headers,
          })
          .then((res) => {
              setData(res.data.commentList.comments)})
          .catch((err)=>{})
      }, [count,nid]);
    
    return(
        <Box>
            {data.map((item,index)=>{
                return(
                    <Comment commentData={item} />
                )
            })}
        </Box>
    )
}
export default Comments;