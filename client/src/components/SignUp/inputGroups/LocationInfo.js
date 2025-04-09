import React from "react";
import { Grid, TextField } from "../../mui";

const LocationInfo = () => (
  <>
    <Grid item xs={12}>
      <TextField name="address" label="Address" required fullWidth />
    </Grid>
    <Grid item xs={12}>
      <TextField name="addressLine2" label="Address Line 2" fullWidth />
    </Grid>
    <Grid item xs={12}>
      <TextField
        name="countryOfResidence"
        label="Country of Residence"
        required
        fullWidth
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        name="stateOrTerritoryOrProvince"
        label="State or Territory or Province"
        required
        fullWidth
      />
    </Grid>
    <Grid item xs={12}>
      <TextField name="townOrCity" label="Town or City" required fullWidth />
    </Grid>
    <Grid item xs={12}>
      <TextField name="postalCode" label="Postal Code" required fullWidth />
    </Grid>
  </>
);

export default LocationInfo;
