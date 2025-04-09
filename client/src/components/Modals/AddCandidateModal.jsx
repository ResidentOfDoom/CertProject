import React from "react";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import CandidateFormFields from "components/FormFields/CandidateFormField";
import useFormFields from "hooks/useFormFields";

const AddCandidateModal = ({ open, onClose, onSave }) => {
  const { fields, handleFieldChange } = useFormFields({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    nativeLanguage: "",
    birthDate: "",
    photoIDType: "",
    photoIDNumber: "",
    photoIDIssueDate: "",
    address: "",
    addressLine2: "",
    countryOfResidence: "",
    stateOrTerritoryOrProvince: "",
    townOrCity: "",
    postalCode: "",
    landlineNumber: "",
    mobileNumber: "",
    email: "",
    password: "",
    // Add all other fields here
  });

  const handleSave = () => {
    console.log("From Add Candidate Modal", fields);
    onSave(fields);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <CandidateFormFields {...fields} onChange={handleFieldChange} />
      </DialogContent>
      <DialogActions style={{ justifyContent: "space-between" }}>
        <Button onClick={onClose}>Close</Button>
        <Button onClick={handleSave}>Save Changes</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCandidateModal;
