import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShowDetails(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Author New Sheet
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        {showDetails ? (
          <>
            <DialogTitle style={{ marginLeft: "auto", marginRight: "auto" }}>
              New Sheet Details
            </DialogTitle>
            <DialogContent style={{ textAlign: "center" }}>
              <TextField
                fullWidth
                label="Sheet Name"
                id="fullWidth"
                style={{ margin: "5px" }}
              />
              <TextField
                fullWidth
                label="Sheet Description"
                id="fullWidth"
                style={{ margin: "5px" }}
              />
              <FormControl style={{ width: "40%", margin: "5px" }}>
                <InputLabel id="demo-simple-select-label">
                  Select Assets
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Heavy Duty Line</MenuItem>
                  <MenuItem value={20}>Light Duty Line</MenuItem>
                </Select>
              </FormControl>
              <FormControl style={{ width: "40%", margin: "5px" }}>
                <InputLabel id="demo-simple-select-label">
                  Sub-Assets
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Press Up Station</MenuItem>
                  <MenuItem value={20}>Knockdown Station</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="contained"
                style={{ marginTop: "5px" }}
                onClick={handleClose}
              >
                Start Authoring
              </Button>
            </DialogContent>
          </>
        ) : (
          <>
            <DialogTitle style={{ marginLeft: "auto", marginRight: "auto" }}>
              How do you want to start?
            </DialogTitle>
            <DialogContent>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  style={{ textAlign: "center", cursor: "pointer" }}
                  onClick={() => setShowDetails(true)}
                >
                  <h3>Author from Scratch</h3>
                  <h4>
                    Build a sheet by dragging & dropping using the authoring
                    module, from scratch.
                  </h4>
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{ textAlign: "center", cursor: "pointer" }}
                >
                  {" "}
                  <h3>Choose from Template</h3>
                  <h4>
                    Choose an already built sheet from our extensive sheets
                    library and edit on top of it.
                  </h4>
                </Grid>
              </Grid>
            </DialogContent>
          </>
        )}
      </Dialog>
    </div>
  );
}
