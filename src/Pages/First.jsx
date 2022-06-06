import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import AuthorNewSheetButton from "../Components/AuthorNewSheetButton";
import Sidebar from "../Components/Sidebar";

function First() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div style={{ marginLeft: "100px", marginTop: "10px" }}>
      <Sidebar />
      <Grid container>
        <Grid item xs={4} style={{ textAlign: "left" }}>
          <Button
            variant="outlined"
            style={{ marginTop: "15px", marginLeft: "40px" }}
          >
            Sheets
          </Button>
        </Grid>
        <Grid item xs={8} style={{ marginBottom: "15px" }}>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Search"
              variant="standard"
              style={{ width: "50%" }}
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={6}>
              <FormControl style={{ width: "80%" }}>
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
            </Grid>
            <Grid item xs={6}>
              <FormControl style={{ width: "80%" }}>
                <InputLabel id="demo-simple-select-label">
                  Select Sub-Assets
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
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} style={{ alignSelf: "left" }}>
          <AuthorNewSheetButton />
        </Grid>
      </Grid>
    </div>
  );
}

export default First;
