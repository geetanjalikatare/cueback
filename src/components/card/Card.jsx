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
import Comments from "../comments/CommentList";
import Collection from "../collection/Collection";
import Collabrator from "../collaborator/Collabrator";
import Like from "../like/Like";
import CommentBox from "../comments/CommentBox";
import Actions from "../actionMenu/Actions";

const Card = ({ data }) => {
  return (
    <Box
      style={{
        backgroundColor: "#e6f3f4",
        paddingBottom: "10px",
        paddingTop: "30px",
      }}
    >
      <Paper
        style={{
          width: "700px",
          marginLeft: "230px",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <Grid
          container
          style={{ borderBottom: "1px dotted grey", padding: "10px" }}
        >
          <Grid item xs={1}>
            <Avatar
              style={{ width: "50px", height: "50px" }}
              alt="Remy Sharp"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            />
          </Grid>
          <Grid item xs={9}>
            <Typography>
              By{" "}
              <a href="##">
                {data.user_details.field_first_name_value}{" "}
                {data.user_details.field_last_name_value}
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
          <Grid item xs={2}>
           <Actions data={data.actions_on_memory}
           />
          </Grid>
        </Grid>
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
        <Typography style={{ borderBottom: "1px dotted grey" }}>
          <DateRange />
          {dateConverter(data.updated).month} {dateConverter(data.updated).year}
          {"     "} <LocationOn />
          {data.location}
        </Typography>

        <div style={{ paddingTop: "20px", borderBottom: "1px dotted grey" }}>
          <Typography style={{ paddingBottom: "20px" }}>
            {data.mins_to_read !== "" && (
              <i>
                {"<"} {data.mins_to_read}
              </i>
            )}
            <Box>
              {data.collection_name && (
                <Collection value={data.collection_name} />
              )}
            </Box>
            {data.collaborators.length > 0 && (
              <Collabrator
                collab={data.collaborators}
                authorColor={data.author_color_mapping}
              />
            )}
            <div
              dangerouslySetInnerHTML={{ __html: data?.description }}
              style={{ maxHeight: "117px", overflow: "hidden" }}
            />
            {data.images && (
              <Box style={{ marginTop: "10px" }}>
                <ImageList data={data.images} />
              </Box>
            )}
          </Typography>
        </div>
        <Grid container style={{ borderBottom: "1px dotted grey" }}>
          <Grid item xs={7}>
            <Typography>
              {data.is_comment_allowed
                ? `${data.comments_count} Comments ${" "}`
                : " "}
              {data.like_comment_data.like_count && <a href="##"> Likes</a>}
            </Typography>
            {data.attachment_count > 0 && (
              <Typography style={{ color: "#36779a" }}>
                <a href="##">
                  <Attachment
                    style={{ transform: "rotate(150deg)", width: "25px" }}
                  />
                  {data.attachment_count}
                </a>
              </Typography>
            )}
          </Grid>
          <Grid item xs={5} style={{ paddingTop: "8px", paddingBottom: "8px" }}>
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
          <Comments nid={data.nid} />
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

            <Grid item xs={11}>
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
