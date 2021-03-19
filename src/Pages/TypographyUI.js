import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import "fontsource-roboto";

const TypographyUI = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Grid container spacing={2}>
        <Grid item xs="12" xl="4" md="6">
          <Paper elevation="3" p="3">
            <Typography variant="h5" align="center">
              Use Text Variant
            </Typography>
            <Divider />
            <Box p={3}>
              <Typography variant="h3">Use h3 variant</Typography>
              <Typography variant="subtitle1">Use subtitle1 variant</Typography>
              <Typography variant="body1">Use body1 variant</Typography>
              <Typography display="block" variant="caption">
                Use caption variant
              </Typography>
              <Typography variant="overline">Use overline variant</Typography>
              <Typography display="block" variant="srOnly">
                Use srOnly variant
              </Typography>
              <Typography display="block" variant="button">
                Use button variant
              </Typography>
              <Typography variant="inherit">Use inherit variant</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs="12" xl="4" md="6">
          <Paper elevation="3">
            <Typography variant="h5" align="center">
              Use Text Color
            </Typography>
            <Divider />
            <Box p={3}>
              <Typography variant="h6" color="primary">
                Text color="primary"
              </Typography>
              <Typography variant="h6" color="initial">
                Text color="initial"
              </Typography>
              <Typography variant="h6" color="inherit">
                Text color="inherit"
              </Typography>
              <Typography variant="h6" color="secondary">
                Text color="secondary"
              </Typography>
              <Typography variant="h6" color="textPrimary">
                Text color="textPrimary"
              </Typography>
              <Typography variant="h6" color="textSecondary">
                Text color="textSecondary"
              </Typography>
              <Typography variant="h6" color="primerrorary">
                Text color="error"
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs="12" xl="4" md="6">
          <Paper elevation="3">
            <Typography variant="h5" align="center">
              Use Text Align
            </Typography>
            <Divider />
            <Box p={3}>
              <Typography component="p" align="left">
                Text-align "left" on the component.
              </Typography>
              <Typography component="p" align="right">
                Text-align "right" on the component.
              </Typography>
              <Typography component="p" align="center">
                Text-align "center" on the component.
              </Typography>
              <Typography component="p" align="justify">
                Text-align "justify" on the component.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TypographyUI;
