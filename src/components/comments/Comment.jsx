import { Avatar, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { dateConverter } from "../util/functions";
import Like from "../like/Like";

const Comment = ({ commentData }) => {
  return (
    <Box
      style={{
        
        padding: "8px 0px 8px 0px",
      }}
    >
      <Grid container>
        <Grid item xs={1}>
          <Avatar
            style={{ width: "40px", height: "40px" }}
            alt="Remy Sharp"
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          />
        </Grid>
        <Grid item xs={9} style={{borderBottom: "1px solid lightgrey"}}>
          <h5
            style={{
              color: "#2d7da5",
              fontSize: "17px",
              textDecoration: "underline",
            }}
          >
            {commentData.field_first_name_value}{" "}
            {commentData.field_last_name_value}{" "}
            <span
              style={{
                color: "black",
                fontSize: "15px",
                textDecoration: "none",
              }}
            >
              {dateConverter(commentData.changed).month}{" "}
              {dateConverter(commentData.changed).date} at{" "}
              {dateConverter(commentData.changed).hours}:
              {dateConverter(commentData.changed).minutes}{" "}
            </span>
          </h5>
          <p>{unescape(commentData.comment_body_value)}</p>
          <p>{commentData.like_comment_data.like_count>0 && <a href="##">{" "}Likes</a>}</p>
        </Grid>
        <Grid item xs={2} style={{ color: "#2d7da5", marginTop: "45px",paddingLeft:"40px",borderBottom: "1px solid lightgrey" }}>
          <Like
            type="comment"
            likeCount={commentData.like_comment_data.like_flag}
            nid={commentData.nid}
            uid={commentData.uid}
            attr_id={commentData.cid}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Comment;
