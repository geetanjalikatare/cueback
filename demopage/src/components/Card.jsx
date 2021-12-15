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
import EditIcon from "@mui/icons-material/Edit";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import DeleteIcon from "@mui/icons-material/Delete";
import DateRangeIcon from "@mui/icons-material/DateRange";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SendIcon from '@mui/icons-material/Send';

const Card = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box style={{ backgroundColor: "#f4f1e9", paddingBottom: "10px",paddingTop:"30px" }}>
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
              By <a href="#">You</a> on 14 Dec
            </Typography>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#2177b1",
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
              style={{border:"1px solid #166e60",color:"#166e60"}}
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
              <MenuItem
                onClick={handleClose}
                style={{ border: "1px solid green" }}
              >
                {" "}
                <EditIcon /> Edit Memory
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                style={{ border: "1px solid green" }}
              >
                {" "}
                <SystemUpdateAltIcon />
                Move to Drafts
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                style={{ border: "1px solid green" }}
              >
                {" "}
                <AddToPhotosIcon />
                Add to Collection
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                style={{ border: "1px solid green" }}
              >
                {" "}
                <DeleteIcon style={{ color: "red" }} />
                Delete
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
        <Typography
          style={{
            color: "RGB(23, 110, 101)",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
          variant="h5"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde
          exercitationem reprehenderit. o officiis mollitia neque hic facere.
        </Typography>
        <Typography style={{ borderBottom: "1px dotted grey" }}>
          <DateRangeIcon />
          Feb 2020
        </Typography>
        <div style={{ paddingTop: "20px", borderBottom: "1px dotted grey" }}>
          <Typography style={{ paddingBottom: "20px" }}>
            Lorem ipsum dolor sit amet.
          </Typography>
          <img
            width="350px"
            height="300px"
            alt="new"
            src="https://cuebackmedia.storage.googleapis.com/infobeans_new/mystory/thumbs/thumb-%40700-8582.jpeg?GoogleAccessId=298180869348-compute@developer.gserviceaccount.com&Expires=1639734344&Signature=g48tOOlsXywE517YuwadbieKcGVLeeh9YT8tVxlmcK%2BIEeqttdBDpgiatANAUZ3JxNliTfIat4jc%2BEiboHXZrHUcjmKnjk12foI7gGC%2B0ugUX6j55Dv496CScrvYRgRo%2B2L6rWVySV%2FTa60OnWywpNGisSAo7BIhygTuhz52W3T38DzRHd6hI64KpR1tnZu0BDK6SuprXbMKjrHAg4IxGgOI%2Ff5N%2FlfhhEKcoic40C1AvMG6V9ltO2Wm2nMDYeAfh3mW%2BTw7OYDTMVU%2FbpyNXO8jyo5%2B0GlOFtmE2KWOhyOEsKnsCq8f1OQLkqDjpMu85cur6cUcV9qXd2baZzlKeQ%3D%3D"
          ></img>
          <img
            width="250px"
            height="300px"
            alt="new"
            src="https://cuebackmedia.storage.googleapis.com/infobeans_new/mystory/8583.JPG?GoogleAccessId=298180869348-compute@developer.gserviceaccount.com&Expires=1639734032&Signature=OeeWrISvSPzQLkr9r%2Bgi3WDb%2FltP8IkD%2FkCjWINv8JAHejgy5Agg%2FSIT4v2ddlcmuxt63qtQ5n%2F3%2FYHJ3pB%2FMMpgNi40Kdyki9RA9XiB5vpoVRlcqsQ0tCGEb%2BwDTsPnItoq%2FlA1TkPUg1qwFJK0227h%2B97P3SnIJVPw6xyr9P3bItslPFCiVl8mnR37d%2B9mMgxRFAoAsH0NqKZfTXugD90hHXcYxuO0gQ8optwQYgo1sOcstWum%2BJBiDFRBBmYvCsnli2RY10z8S64O9IuuabbCWyt6gsRCP1zMNbqm7I%2Fs%2F%2BeSVV%2FyRcgkwbcyduDXJrSjJcmFNc9jUYzibLEhJA%3D%3D"
          ></img>
        </div>
        <Grid container style={{ borderBottom: "1px dotted grey" }}>
          <Grid item xs={6}>
            <Typography>
              0 view <a href="#">Likes</a> Comments
            </Typography>
          </Grid>
          <Grid item xs={6}  style={{paddingTop:"8px",paddingBottom:"8px"}}>
            <Button style={{border:" 1px solid #166e60",color:"#166e60",marginLeft:"25px"}}> <FavoriteBorderIcon /> Like</Button>
            <Button style={{border:" 1px solid #166e60",color:"#166e60",marginLeft:"15px"}}> <ShareIcon/>Share</Button>
            <Button style={{border:" 1px solid #166e60",color:"#166e60",marginLeft:"10px"}}> <ContentCopyIcon/>Copy Link</Button>
          </Grid>
        </Grid>
        <Grid container style={{ paddingTop: "20px" }}>
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
            <Button style={{ float: "right" ,backgroundColor:"#166e60"}} variant="contained" > <SendIcon/> Post</Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
export default Card;
