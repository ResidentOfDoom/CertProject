import { Grid } from "../mui";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <Grid container>
    <Grid item xs>
      <Link to="/">Forgot password? Sorry, we can't help</Link>
    </Grid>
    <Grid item>
      <Link to="../SignUp">{"Don't have an account? Sign Up"}</Link>
    </Grid>
  </Grid>
);

export default Footer;
