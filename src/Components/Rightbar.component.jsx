import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";
import feed from "../Assets/Images/feed.jpeg"
const Rightbar = () => {
    return (
        <Box flex={2} p={2} sx={{display:{xs:"none", sm:"block"}}}>
            <Box position="fixed" width="300" m="5px" p="5px">
                <Typography variant={"h6"}>
                    Online Friends
                </Typography>
                <AvatarGroup max={8}>
                    <Avatar alt="Remy Sharp" src="" />
                    <Avatar alt="Travis Howard" src="" />
                    <Avatar alt="Cindy Baker" src="" />
                    <Avatar alt="Agnes Walker" src="" />
                    <Avatar alt="Trevor Henderson" src="" />
                    <Avatar alt="Remy Sharp" src="" />
                    <Avatar alt="Travis Howard" src="" />
                    <Avatar alt="Cindy Baker" src="" />
                    <Avatar alt="Agnes Walker" src="" />
                    <Avatar alt="Trevor Henderson" src="" />
                </AvatarGroup>
                <Typography variant={"h6"}>
                    Latest Photos
                </Typography>
                <ImageList cols={3} gap={5} rowHeight={100}>
                    <ImageListItem><img src={feed}/></ImageListItem>
                    <ImageListItem><img src={feed}/></ImageListItem>
                    <ImageListItem><img src={feed}/></ImageListItem>
                </ImageList>
            </Box>
        </Box>
    )
}

export default Rightbar