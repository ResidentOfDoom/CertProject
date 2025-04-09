import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import { getCandidateByNumber } from "api/candidates/getCandidateByNumber";
import CandidateFormFields from "components/FormFields/CandidateFormField";
import useFormFields from "hooks/useFormFields";
import React, { useEffect } from "react";

export const UpdateCandidateModal = ({
  open,
  onClose,
  onSave,
  candidateNumber,
}) => {
  const { fields, setFields, handleFieldChange } = useFormFields({
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
  });

  useEffect(() => {
    if (candidateNumber) {
      const fetchCandidateData = async () => {
        try {
          const candidateData = await getCandidateByNumber(candidateNumber);
          setFields(candidateData); // Sets all the fields with the fetched data
        } catch (error) {
          console.error("Error fetching candidate data: ", error);
        }
      };

      fetchCandidateData();
    }
  }, [candidateNumber, setFields]);

  const handleSaveClick = () => {
    onSave(fields); // Passesthe updated fields to the onSave function
    onClose(); // Closes the modal
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        {/* Pass each field and its corresponding onChange handler as props */}
        <CandidateFormFields {...fields} onChange={handleFieldChange} />
      </DialogContent>
      <DialogActions style={{ justifyContent: "space-between" }}>
        <Button onClick={onClose}>Close</Button>
        <Button onClick={handleSaveClick}>Save Changes</Button>
      </DialogActions>
    </Dialog>
  );
};
