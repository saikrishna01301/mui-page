import { Home, Mail, Notifications} from "@mui/icons-material";
import { AppBar, Box, Toolbar, Typography, styled, InputBase, Badge, Avatar, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import myAvatar from "../Assets/Images/myAvatar.jpg"

const StyledToolbar = styled(Toolbar) ({
    display: 'flex',
    justifyContent: 'space-between'
})
const Search = styled("div")(({theme}) => ({
    backgroundColor: '#fff',
    color:'#444',
    padding: '0px 10px',
    width: "40%",
    borderRadius: theme.shape.borderRadius,
}))
const Icons = styled('Box') (({theme})=>({
    display: "none",
    gap:"20px",
    alignItems: "center",
    [theme.breakpoints.up('sm')]: {
        display:"flex",
    }
}))
const UserBox = styled('Box') (({theme})=>({
    display: "flex",
    gap:"10px",
    alignItems: "center",
    [theme.breakpoints.up('sm')]: {
        display: "none",
    }
}))

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
            <AppBar position="sticky">
                <StyledToolbar> 
                    <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>
                        SRR  
                    </Typography>
                    <Home sx={{display:{xs:"block", sm:"none"}}}/>
                    <Search>
                        <InputBase placeholder="Search"/>
                    </Search>
                    <Icons>
                        <Badge badgeContent={4} color="error">
                            <Mail color="#fff" />
                        </Badge>
                        <Badge badgeContent={2} color="error">
                            <Notifications color="#fff" />
                        </Badge>
                        <Avatar onClick={()=>{setOpen(true)}} alt="krish" src={myAvatar} sx={{width: 28, height:28}}/>
                    </Icons>
                    <UserBox onClick={()=>{setOpen(true)}}>
                        <Avatar alt="krish" src={myAvatar} sx={{width: 28, height:28}}/>
                        <Typography variant="span">krish</Typography>
                    </UserBox>
                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        open={open}
                        onClose={()=>setOpen(false)}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}>
                      <MenuItem>Profile</MenuItem>
                      <MenuItem>My account</MenuItem>
                      <MenuItem>Logout</MenuItem>
                    </Menu>
                </StyledToolbar>
            </AppBar>
    )
}
export default Navbar