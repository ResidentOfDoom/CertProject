import React from "react";
import { Button, Grid } from "../mui";
import { Link } from "react-router-dom";

const Footer = () => (
  <>
    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
      Sign Up
    </Button>
    <Grid container justifyContent="flex-end">
      <Grid item>
        <Link to="../Login">Already have an account? Sign in</Link>
      </Grid>
    </Grid>
  </>
);

export default Footer;
