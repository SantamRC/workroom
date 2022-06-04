import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const drawerWidth = 80;

export default function PermanentDrawerRight() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          zIndex: -1,
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Toolbar />
        <ListItem key={"home"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Divider />
        <List>
          <ListItem key={"reload"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <RotateLeftIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem key={"check"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CheckBoxIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem key={"build"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BorderColorIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
