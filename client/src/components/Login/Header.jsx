import { Avatar, LockOutlinedIcon, Typography } from "../mui";
import React from "react";

const Header = () => (
  <>
    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
      <LockOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
      Login
    </Typography>
  </>
);

export default Header;
