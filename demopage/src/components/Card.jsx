import {
  Box,
  Button,
  Grid,
  Paper,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DateRangeIcon from "@mui/icons-material/DateRange";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import SendIcon from "@mui/icons-material/Send";
import Prompts from "./Prompts";

const Card = ({ data }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //console.log(data);

  const date_fun = (str) =>{
    const obj={
      date:"",
      month:"",
      year:""
    }
    const date = new Date(str*1000);
    const c=date.toLocaleDateString("en-US"); //   12/6/21 month date year
    const a=c.split("/");
    var months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
           "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];    
    obj.month=months[a[0]-1] ;
    obj.date=a[1];
    obj.year=a[2]
    return obj;     
  }
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
          <Grid item xs={8}>
            <Typography>
              By <a href="#">{data.user_details.field_first_name_value}{" "}{data.user_details.field_last_name_value}</a>  
              {" "}on {date_fun(data.updated).date}{" "}{date_fun(data.updated).month}
            </Typography>
            <Button
              variant="contained"
              style={{
                backgroundColor: "RGB(189, 103, 103)",
                borderRadius: "15px",
                height: "25px",
              }}
            >
              Shared with 7 members
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              style={{ border: "1px solid #166e60", color: "#166e60" }}
            >
              Action
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              style={{ border: "1px solid green" }}
            >
              {Object.keys(data.actions_on_memory).map((i) => {
                return (
                  <MenuItem onClick={handleClose}>
                    {data.actions_on_memory[i]}
                  </MenuItem>
                );
              })}
            </Menu>
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
          <DateRangeIcon />
          {date_fun(data.updated).month} {" "}{ date_fun(data.updated).year}
        </Typography>


        <div style={{ paddingTop: "20px", borderBottom: "1px dotted grey" }}>
          <Typography style={{ paddingBottom: "20px" }}>
            {data.mins_to_read !=="" &&(<i>{"<"}{" "}{data.mins_to_read}</i>)}
            <div
              dangerouslySetInnerHTML={{ __html: data?.description }}
              style={{ maxHeight: "117px", overflow: "hidden" }}
            />
          </Typography>
          
        </div>
        <Grid container style={{ borderBottom: "1px dotted grey" }}>
          <Grid item xs={6}>
            <Typography>
              {data.is_comment_allowed ? "Comments" : " "}
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ paddingTop: "8px", paddingBottom: "8px" }}>
            <Button
              style={{
                border: " 1px solid #166e60",
                color: "#166e60",
                marginLeft: "25px",
              }}
            >
              {" "}
              <FavoriteBorderIcon /> Like
            </Button>

            <Button
              style={{
                border: " 1px solid #166e60",
                color: "#166e60",
                marginLeft: "10px",
              }}
            >
              {" "}
              <ContentCopyIcon />
              Copy Link
            </Button>
          </Grid>
        </Grid>
        {data.is_comment_allowed ? (<Grid container style={{ paddingTop: "20px" }}>
          <Grid item xs={1}>
            <Avatar
              style={{ width: "40px", height: "40px" }}
              alt="Remy Sharp"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            />
          </Grid>
          
            <Grid item xs={11}>
              <TextareaAutosize
                min={4}
                style={{ width: "620px", height: "100px", borderRadius: "8px" }}
              />
              <Button
                style={{
                  float: "right",
                  backgroundColor: "RGB(238, 150, 163)",
                }}
                variant="contained"
              >
                {" "}
                <SendIcon /> Post
              </Button>
            </Grid>
         
        </Grid> ) : null}
       {data.prompts &&(<Box>
          <Prompts data={data.prompts.random_prompt_data}/>
        </Box>)} 
      </Paper>
    </Box>
  );
};
export default Card;
