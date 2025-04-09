import { Grid, TextField } from "../../mui";
import React from "react";

const PersonalInfo = () => (
  <>
    <Grid item xs={12} sm={6}>
      <TextField name="firstName" label="First Name" required fullWidth />
    </Grid>
    {/* <Grid item xs={12} sm={6}>
      <TextField name="middleName" label="Middle Name" fullWidth />
    </Grid> */}
    <Grid item xs={12} sm={6}>
      <TextField name="lastName" label="Last Name" required fullWidth />
    </Grid>
    {/* <Grid item xs={12} sm={6}>
      <TextField name="gender" label="Gender" required fullWidth />
    </Grid> */}
    <Grid item xs={12}>
      <TextField
        name="email"
        label="Email Address"
        required
        fullWidth
        type="email"
      />
    </Grid>

    {/* <Grid item xs={12}>
      <TextField name="landlineNumber" label="Landline Number" fullWidth />
    </Grid>
    <Grid item xs={12}>
      <TextField name="mobileNumber" label="Mobile Number" required fullWidth />
    </Grid>
    <Grid item xs={12}>
      <TextField
        name="nativeLanguage"
        label="Native Language"
        required
        fullWidth
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        name="birthDate"
        label="Birth Date"
        required
        fullWidth
        type="date"
        InputLabelProps={{ shrink: true }}
      />
    </Grid> */}
  </>
);

export default PersonalInfo;
