import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AdbIcon from "@mui/icons-material/Adb";
import logo from "../logo.png";

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img style={{ width: "150px", margin: "10px" }} src={logo} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            WORKROOM
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 200,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            | CTQ System
          </Typography>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <Badge
              color="secondary"
              variant="dot"
              invisible={false}
              style={{ marginRight: "20px" }}
            >
              <NotificationsNoneIcon
                style={{ color: "black", fontSize: "30px" }}
              />
            </Badge>
            <Tooltip title="Open Profile">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Santam" />
              </IconButton>
            </Tooltip>
            <Typography style={{ color: "black", marginLeft: "5px" }}>
              Santam Roy Choudhury{'\n'}Admin
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
