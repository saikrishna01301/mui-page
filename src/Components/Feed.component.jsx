import { CenterFocusStrong, ExpandMore, Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material";
import React from "react";
import myAvatar from "../Assets/Images/myAvatar.jpg";
import feed from "../Assets/Images/feed.jpeg";
const Feed = () => {
    return (
        <Box flex={4} p={2}>
            <Card sx={{margin:5}}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "red" }} aria-label="recipe" src={myAvatar} />
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVert />
                  </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="20%"
                image={feed}
                alt="Paella dish"
              />
              <CardContent>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
              </Typography>
              </CardContent>
              <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite color="error"/>}/>
              </IconButton>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </CardActions>
          </Card>
          <Card sx={{margin:5}}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "red" }} aria-label="recipe" src={myAvatar} />
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVert />
                  </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="20%"
                image={feed}
                alt="Paella dish"
              />
              <CardContent>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
              </Typography>
              </CardContent>
              <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite color="error"/>} />
              </IconButton>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </CardActions>
          </Card>
          <Card sx={{margin:5}}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "red" }} aria-label="recipe" src={myAvatar} />
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVert />
                  </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="20%"
                image={feed}
                alt="Paella dish"
              />
              <CardContent>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
              </Typography>
              </CardContent>
              <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite color="error"/>} />
              </IconButton>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </CardActions>
          </Card>
        </Box>
    )
}

export default Feed