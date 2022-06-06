import { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Divider from "@mui/material/Divider";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TableRowsIcon from "@mui/icons-material/TableRows";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Draggable from "react-draggable";

function Table() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [items, setItems] = useState([]);
  const [sectionNumber, setSectionNumber] = useState(0);
  const [selected, setSelected] = useState(false);
  const [showAction, setShowAction] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [showInput, setShowInput] = useState({});
  const [fieldValue, setFieldValue] = useState("");

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleChange = () => {
    setSelected(!selected);
  };

  const clickCard = (id) => {
    setShowAction(true);
    let card = items[id];
    //console.log(card);
    setSelectedCard(card);
  };

  const clickField = (index, field) => {
    setShowInput({ index: index, field: field });
  };

  const updateField = (ind, field) => {
    console.log(ind + " " + field + " " + fieldValue);
    const newItems = items.map((item, index) => {
      if (index == ind) {
        if (field == "title") return { ...item, title: fieldValue };
        if (field == "description") return { ...item, description: fieldValue };
        if (field == "checklist" && fieldValue == "") {
          item.options.push({ title: " ", checked: false });
          return { ...item };
        }
        if (field == "checklist" && fieldValue != "") {
          item.options.push(fieldValue);
          return { ...item };
        }
        if (field == "checklist-delete") {
          console.log("The Option value is: " + fieldValue);
          let newOptions = item.options.filter(
            (option, ind) => ind != fieldValue
          );
          return { ...item, options: newOptions };
        }
        if (field == "checklist-check") {
          console.log("The Option value is: " + fieldValue);
          let newOptions = item.options.map((option, indd) => {
            if (indd == fieldValue)
              return { ...option, checked: !option.checked };
            return { ...option };
          });
          return { ...item, options: newOptions };
        }
      }
      return item;
    });
    if (field === "delete") {
      let newItems = items.filter((option, indd) => {
        return indd != ind;
      });
      setItems(newItems);
    }else{
      setItems(newItems);
      console.log(newItems);
      setShowInput({});
    }
    
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
    //console.log("Section is clicked");
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
        marginTop: "15px",
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
                <TextFieldsIcon />
              </ListItemIcon>
              <ListItemText primary="Text" />
            </ListItem>
            <ListItem sx={{ width: "100%", bgcolor: "#ababab" }}>
              <ListItemText primary="Selection Fields" />
            </ListItem>
            <Draggable position={{ x: 0, y: 0 }}>
              <ListItem
                style={{ cursor: "pointer" }}
                onClick={() => addChecklist()}
              >
                <ListItemIcon>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Checklist" />
              </ListItem>
            </Draggable>
            <Draggable position={{ x: 0, y: 0 }}>
              <ListItem style={{ cursor: "pointer" }} onClick={() => addDate()}>
                <ListItemIcon>
                  <CalendarMonthIcon />
                </ListItemIcon>
                <ListItemText primary="Select Date and Time" />
              </ListItem>
            </Draggable>

            <ListItem sx={{ width: "100%", bgcolor: "#ababab" }}>
              <ListItemText primary="Attachment Fields" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AddPhotoAlternateIcon />
              </ListItemIcon>
              <ListItemText primary="Upload Image" />
            </ListItem>
            <ListItem sx={{ width: "100%", bgcolor: "#ababab" }}>
              <ListItemText primary="Layout" />
            </ListItem>
            <Draggable position={{ x: 0, y: 0 }}>
              <ListItem
                style={{ cursor: "pointer" }}
                onClick={() => addSection()}
              >
                <ListItemIcon>
                  <TableRowsIcon />
                </ListItemIcon>
                <ListItemText primary="Section" />
              </ListItem>
            </Draggable>
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
          onMouseOver={() => console.log("Mouse is Over")}
        >
          <Typography sx={{ mb: 2 }} variant="h6" component="div">
            Canvas
          </Typography>
          <Divider />

          {/* Section Code */}

          <Grid container>
            {items.map((item, index) => {
              if (item.type === "Section") {
                return (
                  <Grid
                    key={index}
                    onClick={() => clickCard(index)}
                    item
                    xs={item.width}
                    style={{ backgroundColor: "#dedede", margin: "5px" }}
                  >
                    <MoreHorizIcon
                      style={{
                        marginLeft: "auto",
                        display: "block",
                        marginRight: "10px",
                        cursor: "pointer",
                      }}
                      onClick={(event) => setAnchorEl(event.currentTarget)}
                    />
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={() => setAnchorEl(null)}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                    >
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "red" }}
                        onClick={() => updateField(index, "delete")}
                      >
                        Delete
                      </Button>
                    </Popover>
                    <h4 style={{ textAlign: "left", marginLeft: "15px" }}>
                      Section {item.id}
                    </h4>
                    {showInput.index == index && showInput.field == "title" ? (
                      <div>
                        <TextField
                          id="outlined-basic"
                          label="Title"
                          variant="outlined"
                          onChange={(e) => setFieldValue(e.target.value)}
                        />
                        <Button
                          variant="contained"
                          onClick={() => updateField(index, "title")}
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
                          //console.log("Title is clicked");
                        }}
                      >
                        {item.title}
                      </h2>
                    )}
                    {showInput.index == index &&
                    showInput.field == "description" ? (
                      <div>
                        <TextField
                          id="outlined-basic"
                          label="Title"
                          variant="outlined"
                          onChange={(e) => setFieldValue(e.target.value)}
                        />
                        <Button
                          variant="contained"
                          onClick={() => updateField(index, "description")}
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

              {
                /* Checklist Code */
              }

              if (item.type == "Checklist") {
                return (
                  <Grid
                    key={index}
                    onClick={() => clickCard(index)}
                    item
                    xs={item.width}
                  >
                    <p style={{ margin: 0 }}>{item.title}</p>
                    <div
                      style={{
                        backgroundColor: "#dedede",
                        margin: "10px",
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: "10px",
                      }}
                    >
                      {item.options.map((option, indexOption) => {
                        return (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-around",
                              alignItems: "center",
                            }}
                          >
                            <Checkbox
                              {...label}
                              checked={option.checked}
                              onChange={() => {
                                setFieldValue(indexOption);
                                updateField(index, "checklist-check");
                              }}
                            />
                            <TextField
                              id="outlined-basic"
                              label="Checklist Item"
                              variant="outlined"
                              value={option.title != " " && option.title}
                              style={{ margin: "5px" }}
                            />
                            <RemoveCircleOutlineIcon
                              onClick={() => {
                                setFieldValue(indexOption);
                                updateField(index, "checklist-delete");
                              }}
                            />
                          </div>
                        );
                      })}
                      <Button
                        onClick={() => {
                          setFieldValue("");
                          updateField(index, "checklist");
                        }}
                        style={{ margin: "5px" }}
                        variant="outlined"
                        startIcon={<AddCircleIcon />}
                      >
                        Add
                      </Button>
                    </div>
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
                    style={{ backgroundColor: "#dedede" }}
                  >
                    <h2>This is a Date</h2>
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
