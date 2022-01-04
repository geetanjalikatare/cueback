import React, { useState }  from "react";
import { Box, Button } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

const Prompt = ({value}) =>{
    const [hover,setHover] =useState(false);
    return(
        <Box
            onMouseEnter={()=>setHover(true)}
            onMouseOut={()=>setHover(false)}
              style={{
                borderRadius: "10px",
                alignItems: "center",
                border: "1px solid #2d7ca7",
                height: "163px",
                backgroundColor: hover?"white":"#2d7ca7",
                width: "535px",
                textAlign: "center",
                
              }}
            >
              <Button style={{float:"right"}}>
                <ClearIcon style={{color:hover?"red":"white"}}/>
              </Button>
              <h5 style={{ color: hover?"black":"white" ,paddingBottom:"35px",paddingTop: "20px",marginLeft:"49px"}}>
                {value.title}
              </h5>
              <Button
              onMouseEnter={()=>setHover(true)}
              onMouseOut={()=>setHover(false)}
                variant="contained"
                style={{
                  backgroundColor: "#2d7ca7",
                  textAlign: "center",
                  borderRadius: "20px",
                  border:"2px solid white",
                  color:"white",
                  boxShadow:"0px 0px"
                }}
              >
                Add Your Memory
              </Button>
            </Box>
    )
}
export default Prompt;