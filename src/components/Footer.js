import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


const Footer = () => {

  return (
    <footer >
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <div>
              <Typography variant="h6" >
                About Us
              </Typography>
              <Typography variant="body2" color="textSecondary">
                TO be Done
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div>
              <Typography variant="h6" >
                Quick Links
              </Typography>
              <Typography variant="body2" color="textSecondary">
                TO be Done              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div>
              <Typography variant="h6" >
                Contact Us
              </Typography>
              <Typography variant="body2" color="textSecondary">
              TO be Done
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
