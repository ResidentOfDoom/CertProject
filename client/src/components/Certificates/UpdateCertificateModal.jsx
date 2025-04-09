import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import CertificateFormFields from "./CreateFormFields";
import React, { useEffect, useState } from "react";

const UpdateCertificateModal = ({ open, onClose, certificate, onUpdate }) => {
  // Initialize state with current certificate values
  const [title, setTitle] = useState(certificate?.title || "");
  const [description, setDescription] = useState(
    certificate?.description || ""
  );
  const [price, setPrice] = useState(certificate?.price || 0);
  const [imageSrc, setImageSrc] = useState(certificate?.imageSrc || "");

  // Update state when the certificate changes
  useEffect(() => {
    setTitle(certificate?.title || "");
    setDescription(certificate?.description || "");
    setPrice(certificate?.price || 0);
    setImageSrc(certificate?.imageSrc || "");
  }, [certificate]);

  const handleSaveChanges = () => {
    const updatedData = {
      title,
      description,
      price: Number(price),
      imageSrc,
    };

    onUpdate(updatedData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Update Certificate</DialogTitle>
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
          certificate={certificate}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSaveChanges}>Save Changes</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateCertificateModal;
