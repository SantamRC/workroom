import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Table() {
  const [items, setItems] = useState([]);
  const [sectionNumber, setSectionNumber] = useState(0);
  const [selected, setSelected] = useState(false);
  const [showAction, setShowAction] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [showInput, setShowInput] = useState({});

  const handleChange = () => {
    setSelected(!selected);
  };

  const clickCard = (id) => {
    setShowAction(true);
    let card = items[id];
    console.log(card);
    setSelectedCard(card);
  };

  const clickField = (index, field) => {
    setShowInput({ index: index, field: field });
  };

  const addChecklist = () => {
    setItems((prevItems) => [
      ...prevItems,
      {
        type: "Checklist",
        width: 6,
        title: "Field Title",
        options: [],
        required: false,
        trigger: false,
      },
    ]);
  };

  const addSection = () => {
    console.log("Section is clicked");
    setSectionNumber(sectionNumber + 1);
    setItems((prevItems) => [
      ...prevItems,
      {
        type: "Section",
        width: 12,
        id: sectionNumber,
        title: "Section Title",
        description: "Section Description",
        required: false,
        trigger: false,
      },
    ]);
  };

  const addDate = () => {
    setItems((prevItems) => [
      ...prevItems,
      {
        type: "Date",
        width: 6,
        title: "Field Title",
        date: "",
        required: false,
        trigger: false,
      },
    ]);
  };

  return (
    <Box
      sx={{
        width: "85vw",
        marginTop: "5vh",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={2}
          style={{
            height: "auto",
            minHeight: "70vh",
            border: "2px solid #ababab",
          }}
        >
          <Typography sx={{ mb: 2 }} variant="h6" component="div">
            Fields
          </Typography>
          <Divider />
          <List>
            <ListItem sx={{ width: "100%", bgcolor: "#ababab" }}>
              <ListItemText primary="Basic Fields" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <MoreHorizIcon />
              </ListItemIcon>
              <ListItemText primary="Text" />
            </ListItem>
            <ListItem sx={{ width: "100%", bgcolor: "#ababab" }}>
              <ListItemText primary="Selection Fields" />
            </ListItem>
            <ListItem
              style={{ cursor: "pointer" }}
              onClick={() => addChecklist()}
            >
              <ListItemIcon>
                <MoreHorizIcon />
              </ListItemIcon>
              <ListItemText primary="Checklist" />
            </ListItem>
            <ListItem style={{ cursor: "pointer" }} onClick={() => addDate()}>
              <ListItemIcon>
                <MoreHorizIcon />
              </ListItemIcon>
              <ListItemText primary="Select Date and Time" />
            </ListItem>
            <ListItem sx={{ width: "100%", bgcolor: "#ababab" }}>
              <ListItemText primary="Attachment Fields" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <MoreHorizIcon />
              </ListItemIcon>
              <ListItemText primary="Upload Image" />
            </ListItem>
            <ListItem sx={{ width: "100%", bgcolor: "#ababab" }}>
              <ListItemText primary="Layout" />
            </ListItem>
            <ListItem
              style={{ cursor: "pointer" }}
              onClick={() => addSection()}
            >
              <ListItemIcon>
                <MoreHorizIcon />
              </ListItemIcon>
              <ListItemText primary="Section" />
            </ListItem>
          </List>
        </Grid>

        <Grid
          item
          xs={8}
          style={{
            border: "2px solid #ababab",
            height: "auto",
            minHeight: "70vh",
          }}
        >
          <Typography sx={{ mb: 2 }} variant="h6" component="div">
            Canvas
          </Typography>
          <Divider />
          <Grid container>
            {items.map((item, index) => {
              if (item.type == "Section") {
                return (
                  <Grid
                    key={index}
                    onClick={() => clickCard(index)}
                    item
                    xs={item.width}
                    style={{ backgroundColor: "#ababab", margin: "5px" }}
                  >
                    <h4 style={{ textAlign: "left", marginLeft: "15px" }}>
                      Section {item.id}
                    </h4>
                    {showInput.index == index && showInput.field=="title" ? (
                      <div>
                        <TextField
                          id="outlined-basic"
                          label="Title"
                          variant="outlined"
                        />
                        <Button
                          variant="contained"
                          onClick={() => setShowInput({})}
                        >
                          Save
                        </Button>
                      </div>
                    ) : (
                      <h2
                        style={{
                          textAlign: "left",
                          marginLeft: "15px",
                          cursor: "pointer",
                          width: "auto",
                          display: "block",
                        }}
                        onClick={() => {
                          clickField(index, "title");
                          console.log("Title is clicked");
                        }}
                      >
                        {item.title}
                      </h2>
                    )}
                    {showInput.index == index && showInput.field=="description" ? (
                      <div>
                        <TextField
                          id="outlined-basic"
                          label="Title"
                          variant="outlined"
                        />
                        <Button
                          variant="contained"
                          onClick={() => setShowInput({})}
                        >
                          Save
                        </Button>
                      </div>
                    ) : (
                      <h2
                        style={{
                          textAlign: "left",
                          marginLeft: "15px",
                          cursor: "pointer",
                          width: "auto",
                          display: "block",
                        }}
                        onClick={() => {
                          clickField(index, "description");
                          console.log("Title is clicked");
                        }}
                      >
                        {item.description}
                      </h2>
                    )}
                  </Grid>
                );
              }
              if (item.type == "Checklist") {
                return (
                  <Grid
                    key={index}
                    onClick={() => clickCard(index)}
                    item
                    xs={item.width}
                    style={{ backgroundColor: "#ababab" }}
                  >
                    <h2>This is a Checklist</h2>
                  </Grid>
                );
              }
              if (item.type == "Date") {
                return (
                  <Grid
                    key={index}
                    onClick={() => clickCard(index)}
                    item
                    xs={item.width}
                    style={{ minheight: "100px", height: "auto" }}
                  >
                    <Paper
                      elevation={3}
                      style={{
                        backgroundColor: "#ababab",
                        height: "auto",
                        minHeight: "60px",
                      }}
                    >
                      <h2>This is a Date</h2>
                    </Paper>
                  </Grid>
                );
              }
            })}
          </Grid>
        </Grid>

        <Grid
          item
          xs={2}
          style={{
            border: "2px solid #ababab",
            height: "auto",
            minHeight: "70vh",
          }}
        >
          <Typography sx={{ mb: 2 }} variant="h6" component="div">
            Controls
          </Typography>
          <Divider />
          {showAction && (
            <>
              <Typography
                sx={{ textAlign: "left", padding: 1 }}
                variant="h6"
                component="div"
              >
                Field:{selectedCard.type}
              </Typography>
              <Divider />
              <Typography
                sx={{ textAlign: "left", padding: 1 }}
                variant="h6"
                component="div"
              >
                {selectedCard.title}
              </Typography>
              <Divider />
              <FormGroup style={{ display: "flex" }}>
                <FormControlLabel
                  control={
                    <Checkbox checked={selected} onChange={handleChange} />
                  }
                  label="Required"
                />
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Trigger"
                />
              </FormGroup>
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Table;
