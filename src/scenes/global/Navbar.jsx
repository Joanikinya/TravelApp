
import { useState } from 'react';
import {Badge, Box, IconButton, TextField, Typography} from '@mui/material';
import {PersonOutline, SearchOutlined} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import {shades} from "../../theme";


const Navbar = () => {
    const navigate = useNavigate();

    return (
        <Box 
        display="flex"
        alignItems="center"
        width="100%"
        height="60px"
        backgroundColor="rgba(255, 255, 255, 0.95)"
        color="black"
        position="fixed"
        top="0"
        left="0"
        zIndex="1"
        >
            <Box
            width="80%"
            margin="auto"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            >
                <Box
                onClick ={()=> navigate("/")}
                sx={{'&:hover': {cursor: "pointer"}}}
                color={shades.secondary[500]}
                >
                    <Typography variant="h3" color="#EB5E28">VoyageRow</Typography>
                </Box>
                <Box
                display="flex"
                justifyContent="space-between"
                columnGap="20px"
                zIndex="2"
                > 
                    {/* <IconButton sx={{ color: "black"}}>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton sx={{ color: "black"}}>
                        <PersonOutline/>
                    </IconButton> */}
                    {/* <IconButton sx={{ color: "black"}}>
                        <MenuOutlined/>
                    </IconButton> */}
                </Box>
            </Box>
        </Box>
    );
};

export default Navbar;