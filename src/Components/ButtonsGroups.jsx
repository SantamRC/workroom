import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ArticleIcon from "@mui/icons-material/Article";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ButtonsGroups() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  });

  return (
    <div>
      <Grid container>
        <Grid item xs={4}>
          <Button variant="outlined" component={Link} to="/">
            <ChevronLeftIcon />
          </Button>
          <Button style={{ marginLeft: "10px" }} variant="outlined">
            <ArticleIcon />
            Sheets
          </Button>
          <Button style={{ marginLeft: "20px" }} variant="outlined">
            <ArticleIcon />
            {location.state.name}
          </Button>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <ButtonGroup size="large" aria-label="large button group">
            <Button key="one">Authoring</Button>
            <Button key="two">Preview</Button>
          </ButtonGroup>
          <Button style={{ marginLeft: "10px" }} variant="contained">
            Finish Authoring
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default ButtonsGroups;
