import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: '2rem 0',
    padding: '2rem 0',
    backgroundColor: 'grey'
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <div>
              <Typography variant="h6" className={classes.sectionTitle}>
                About Us
              </Typography>
              <Typography variant="body2" color="textSecondary">
                TO be Done
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div>
              <Typography variant="h6" className={classes.sectionTitle}>
                Quick Links
              </Typography>
              <Typography variant="body2" color="textSecondary">
                TO be Done              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div>
              <Typography variant="h6" className={classes.sectionTitle}>
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
