import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import React, { useState } from "react";
import CertificateFormFields from "./CreateFormFields";

export const AddCertificateModal = ({ open, onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [, setError] = useState({
    title: false,
    description: false,
    price: false,
  });

  const handleSave = () => {
    // Check if required fields are filled
    const newError = {
      title: !title,
      description: !description,
      price: !price,
    };

    setError(newError);

    // Check if there's any error
    const hasError = Object.values(newError).some((isError) => isError);

    if (!hasError) {
      const certificateData = {
        title,
        description,
        price: Number(price), // Ensuring price is a number
        imageSrc,
      };

      onSave(certificateData);
      onClose();
    } else {
      console.log("Please fill in all required fields.");
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <CertificateFormFields
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          price={price}
          setPrice={setPrice}
          imageSrc={imageSrc}
          setImageSrc={setImageSrc}
          certificate={""}
        />
      </DialogContent>
      <DialogActions style={{ justifyContent: "space-between" }}>
        <Button onClick={onClose}>Close</Button>
        <Button onClick={handleSave}>Save Changes</Button>
      </DialogActions>
    </Dialog>
  );
};
