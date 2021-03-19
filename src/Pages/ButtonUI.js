import React from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

const ButtonUI = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs="12" xl="4" md="6">
        <Paper elevation="3">
          <Typography variant="h5" align="center">
            Use Button Color
          </Typography>
          <Divider />
          <Box p={3}>
            <Grid container justify="space-evenly">
              <Button variant="contained">Default</Button>
              <Button variant="contained" color="primary">
                Primary
              </Button>
              <Button variant="contained" color="secondary">
                Secondary
              </Button>
              <Button variant="contained" disabled>
                Disabled
              </Button>
              <Button
                variant="contained"
                color="primary"
                href="#contained-buttons"
              >
                Link
              </Button>
            </Grid>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs="12" xl="4" md="6">
        <Paper elevation="3">
          <Typography variant="h5" align="center">
            Use Button Color
          </Typography>
          <Divider />
          <Box p={3}>
            <Grid container justify="space-evenly">
              <Button>Default</Button>
              <Button color="primary">Primary</Button>
              <Button color="secondary">Secondary</Button>
              <Button disabled>Disabled</Button>
              <Button href="#text-buttons" color="primary">
                Link
              </Button>
            </Grid>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs="12" xl="4" md="6">
        <Paper elevation="3">
          <Typography variant="h5" align="center">
            Use Text Align
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ButtonUI;
