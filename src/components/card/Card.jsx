import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  Avatar,
} from "@mui/material";
import React from "react";
import {
  DateRange,
  ContentCopy,
  Attachment,
  LocationOn,
} from "@mui/icons-material";
import Prompts from "../prompt/Prompts";
import { dateConverter } from "../util/functions";
import ImageList from "../image/ImageList";
import CommentList from "../comments/CommentList";
import Collection from "../collection/Collection";
import Collabrator from "../collaborator/Collabrator";
import Like from "../like/Like";
import CommentBox from "../comments/CommentBox";
import Actions from "../actionMenu/Actions";
import Description from "../description/Description";

const Card = ({ data }) => {
  return (
    <Box
      style={{
        backgroundColor: "#e6f3f4",
        paddingBottom: "10px",
        paddingTop: "10px",
      }}
    >
      <Paper
        style={{
          width: "722px",
         marginLeft: "20px",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Grid
          container
          style={{ borderBottom: "1px solid lightgrey",paddingBottom:"12px"  }}
        >
          <Grid item xs={1}>
            <Avatar
              style={{ width: "49px", height: "50px" }}
              alt="Remy Sharp"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            />
          </Grid>
          <Grid item xs={9} style={{paddingLeft:"10px"}}>
            <Typography>
              By{" "}
              <a href="##">
                {data.user_details?.field_first_name_value}{" "}
                {data.user_details?.field_last_name_value}
              </a>{" "}
              on {dateConverter(data.updated).date}{" "}
              {dateConverter(data.updated).month}
            </Typography>
            <Button
              variant="contained"
              style={{
                backgroundColor: data.share_count
                  ? "#2177b1"
                  : "RGB(189, 103, 103)",
                borderRadius: "15px",
                height: "25px",
              }}
            >
              Shared with {data.share_count ? data.share_count : "All"} members
            </Button>
          </Grid>
          <Grid item xs={2} style={{paddingLeft:"16px"}}>
           <Actions data={data.actions_on_memory}
           />
          </Grid>
        </Grid>
        <Box style={{paddingTop:"10px",paddingBottom:"10px", borderBottom: "1px solid lightgrey"}}>
        <Typography
          style={{
            color: "#3279a0",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
          variant="h5"
        >
          {data.title}
        </Typography>
        <Typography >
          <DateRange />
          {dateConverter(data.updated).month} {dateConverter(data.updated).year}
          {"     "} <LocationOn />
          {data.location}
        </Typography>
        </Box>
        <Box style={{paddingBottom:"40px",borderBottom: "1px solid lightgrey" }}>
          <Typography>
            {data.mins_to_read !== "" && (
              <i style={{ paddingBottom: "20px" }}>
                {"<"} {data.mins_to_read}
              </i>
            )}</Typography>
            <Box >
              {data.collection_name && (
                <Collection value={data.collection_name} />
              )}
            </Box>
            <Box >
            {data.collaborators.length > 0 && (
              <Collabrator
                collab={data.collaborators}
                authorColor={data.author_color_mapping}
              />
            )}</Box>
          <Description data={data.description}/>
            {data.images && (
              <Box style={{ marginTop: "30px" }}>
                <ImageList data={data.images} />
              </Box>
            )}
          
        </Box>
        <Grid container style={{ borderBottom: "1px solid lightgrey",paddingTop: "10px", paddingBottom: "10px" }}>
          <Grid item xs={7}>
            <Typography>
              {data.is_comment_allowed
                ? `${data.comments_count} Comments ${" "}`
                : " "}
              {data.like_comment_data.like_count && <a href="##"> Likes</a>}
              {data.attachment_count > 0 && (<a href="##">
                  <Attachment
                    style={{ transform: "rotate(150deg)", width: "25px" }}
                  />
                  {data.attachment_count}
                </a>)}
            </Typography>
            
          </Grid>
          <Grid item xs={5}  style={{paddingLeft:"69px"}}>
            <Like
              uid={data.user_details.uid}
              nid={data.nid}
              likeCount={data.like_comment_data.like_flag}
              type="node"
              attr_id="0"
            />
            <Button
              style={{
                border: " 1px solid RGB(45, 125, 165)",
                color: "RGB(45, 125, 165)",
                marginLeft: "10px",
              }}
            >
              {" "}
              <ContentCopy />
              Copy Link
            </Button>
          </Grid>
        </Grid>
        <Box>
          <CommentList nid={data.nid} />
        </Box>
        {data.is_comment_allowed ? (
          <Grid container style={{ paddingTop: "20px" }}>
            <Grid item xs={1}>
              <Avatar
                style={{ width: "40px", height: "40px" }}
                alt="Remy Sharp"
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              />
            </Grid>

            <Grid item xs={11} >
              <CommentBox nid={data.nid} />
            </Grid>
          </Grid>
        ) : null}
        {data.prompts && (
          <Box style={{ paddingTop: "20px" }}>
            <Prompts data={data.prompts.random_prompt_data} />
          </Box>
        )}
      </Paper>
    </Box>
  );
};
export default Card;
