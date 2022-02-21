import React from "react";
import {
  Box,
  Card,
  Tooltip,
  IconButton,
  Container,
  darken,
  Divider,
  alpha,
  styled,
  useTheme,
} from "@mui/material";
import { height } from "@mui/system";


const NavBarWrapper = <Card sx={{
    background: 'orange',
    display: 'flex',
    border-radius: '0px',
    border-bottom-right-radius: '40px',
    border-bottom-left-radius: '40px',
    position: 'relative',
}}/>


const NavBarImage = <Box sx={{
   backgroundColor: "black",
   background: 'cover',
   position: 'absolute',
   left: 0,
   top: 0,
   width: '100%',
   height: '100%',
   opacity: 0.7,
}}/>
  
  

function NavBar() {


  return (
    <>
      <NavBarWrapper>
        <NavBarImage />
      <NavBarWrapper/>
    </>
  );
}

export default NavBar;