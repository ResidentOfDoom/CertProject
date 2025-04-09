import React from "react";
import { TextField } from "@mui/material";

const CertificateFormFields = ({
  title,
  setTitle,
  description,
  setDescription,
  price,
  setPrice,
  imageSrc,
  setImageSrc,
  certificate,
}) => {
  return (
    <>
      <TextField
        margin="dense"
        label="Title *"
        type="text"
        fullWidth
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        margin="dense"
        label="Description *"
        type="text"
        fullWidth
        multiline
        rows={4}
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        margin="dense"
        label="Price *"
        type="number"
        fullWidth
        variant="outlined"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <TextField
        margin="dense"
        label="Image Source *"
        type="text"
        fullWidth
        variant="outlined"
        value={imageSrc}
        onChange={(e) => setImageSrc(e.target.value)}
      />
      {certificate && <p>Update form for: {certificate.title}</p>}
    </>
  );
};

export default CertificateFormFields;
