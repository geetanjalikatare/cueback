import { Box } from "@mui/system";
import React from "react";
import Comment from "./Comment";

const Comments = ({data})=>{
    return(
        <Box>
            {data.map((item)=>{
                return(
                    <Comment commentData={item} />
                )
            })}
        </Box>
    )
}
export default Comments;