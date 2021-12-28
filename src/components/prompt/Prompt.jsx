import React, { useState }  from "react";
import { Box, Button } from "@mui/material";

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
                height: "175px",
                backgroundColor: hover?"white":"#2d7ca7",
                width: "500px",
                paddingTop: "20px",
                textAlign: "center",
                "&:hover":{
                    backgroundColor:"white"
                }
              }}
            >
              <h5 style={{ color: hover?"black":"white" ,paddingBottom:"35px"}}>
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