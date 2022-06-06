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
              <HomeIcon
                style={{
                  border: "1px solid #b0b0b0",
                  borderRadius: "10px",
                  padding: "5px",
                  fontSize: "50px",
                }}
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Divider />
        <List>
          <ListItem key={"reload"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <RotateLeftIcon
                  style={{
                    border: "1px solid #b0b0b0",
                    borderRadius: "10px",
                    padding: "5px",
                    fontSize: "50px",
                  }}
                />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem key={"check"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CheckBoxIcon
                  style={{
                    border: "1px solid #b0b0b0",
                    borderRadius: "10px",
                    padding: "5px",
                    fontSize: "50px",
                  }}
                />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem key={"build"} disablePadding style={{borderRight: "5px solid #1f85de"}}>
            <ListItemButton>
              <ListItemIcon>
                <BorderColorIcon
                  style={{
                    border: "1px solid #b0b0b0",
                    borderRadius: "10px",
                    padding: "5px",
                    fontSize: "50px",
                    backgroundColor: "#1f85de",
                    color: 'white'
                  }}
                />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
