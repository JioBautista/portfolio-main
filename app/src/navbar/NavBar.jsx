import React from "react";
import { Link } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
function NavBar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ gap: 2 }}>
          <Link to="/">
            <IconButton size="large" edge="start">
              <HomeIcon />
            </IconButton>
          </Link>
          <Typography variant="h6">
            <Link style={{ textDecoration: "none", color: "white" }} to="about">
              About
            </Link>
          </Typography>
          <Typography variant="h6">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="project"
            >
              Projects
            </Link>
          </Typography>
          <Typography variant="h6">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="contact"
            >
              Contact
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
