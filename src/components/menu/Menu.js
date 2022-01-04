import { Box } from "@mui/material";
import React from "react";

const Menu = () => {
  return (
    <Box>
     <ul type="none" >
         <li style={{fontSize:"18px",color:"grey",marginTop:"20px"}}>Home</li>
         <li style={{fontSize:"18px",color:"grey",marginTop:"20px"}}>Notification Inbox</li>
         <li style={{fontSize:"18px",color:"grey",marginTop:"20px"}}>View Memories</li>
         <li style={{fontSize:"18px",color:"grey",marginTop:"20px"}}>Add Memories</li>
         <li style={{fontSize:"18px",color:"grey",marginTop:"20px"}}>People</li>
     </ul>
    </Box>
  );
};
export default Menu;
