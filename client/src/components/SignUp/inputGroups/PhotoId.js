import { Grid, TextField } from "../../mui";
import React from "react";

const PhotoId = () => (
  <>
    <Grid item xs={12}>
      <TextField name="photoIDType" label="Photo ID Type" required fullWidth />
    </Grid>
    <Grid item xs={12}>
      <TextField
        name="photoIDNumber"
        label="Photo ID Number"
        required
        fullWidth
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        name="photoIDIssueDate"
        label="Photo ID Issue Date"
        required
        fullWidth
        type="date"
        InputLabelProps={{ shrink: true }}
      />
    </Grid>
  </>
);

export default PhotoId;
