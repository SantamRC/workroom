import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";

function Table() {
  const [items, setItems] = useState([]);

  return (
    <Box
      sx={{
        width: "85vw",
        marginTop: "5vh",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={2}
          style={{
            height: "90vh",
            border: "2px solid gray",
          }}
        >
          <Typography sx={{ mb: 2 }} variant="h6" component="div">
            Fields
          </Typography>
          <List>
            <ListItem sx={{ width: "100%", bgcolor: "gray" }}>
              <ListItemText primary="Basic Fields" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Text" />
            </ListItem>
            <ListItem sx={{ width: "100%", bgcolor: "gray" }}>
              <ListItemText primary="Selection Fields" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Checklist" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Select Date and Time" />
            </ListItem>
            <ListItem sx={{ width: "100%", bgcolor: "gray" }}>
              <ListItemText primary="Attachment Fields" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Upload Image" />
            </ListItem>
            <ListItem sx={{ width: "100%", bgcolor: "gray" }}>
              <ListItemText primary="Layout" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Section" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={8} style={{ border: "2px solid gray", height: "90vh" }}>
          <Typography sx={{ mb: 2 }} variant="h6" component="div">
            Canvas
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Single-line item" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={2} style={{ border: "2px solid gray", height: "90vh" }}>
          <Typography sx={{ mb: 2 }} variant="h6" component="div">
            Controls
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Single-line item" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Table;
