import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ArticleIcon from "@mui/icons-material/Article";

function ButtonsGroups() {
  return (
    <div>
      <Grid container>
        <Grid item xs={4}>
          <Button variant="outlined">
            <ChevronLeftIcon />
          </Button>
          <Button style={{ marginLeft: "10px" }} variant="outlined">
            <ArticleIcon />
            Sheets
          </Button>
          <Button style={{ marginLeft: "20px" }} variant="outlined">
            <ArticleIcon />
            First Piece CTQ: Tube Press Up
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