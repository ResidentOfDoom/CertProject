import { Grid, TextField } from "../../mui";
import React from "react";

const Password = ({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  passwordError,
}) => (
  <>
    <Grid item xs={12}>
      <TextField
        name="password"
        label="Password"
        required
        fullWidth
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        label="Confirm Password"
        type="password"
        required
        fullWidth
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        error={!!passwordError}
        helperText={passwordError}
      />
    </Grid>
  </>
);

export default Password;
