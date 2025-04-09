export const candidateFieldConfigurations = () => {
  const fieldConfig = [
    { name: "firstName", label: "First Name", type: "text" },
    { name: "middleName", label: "Middle Name", type: "text" },
    { name: "lastName", label: "Last Name", type: "text" },
    { name: "gender", label: "Gender", type: "text" },
    { name: "nativeLanguage", label: "Native Language", type: "text" },
    { name: "birthDate", label: "Birth Date", type: "date", convert: true },
    { name: "photoIDType", label: "Photo ID Type", type: "text" },
    { name: "photoIDNumber", label: "Photo ID Number", type: "text" },
    {
      name: "photoIDIssueDate",
      label: "Photo ID Issue Date",
      type: "date",
      convert: true,
    },
    { name: "address", label: "Address", type: "text" },
    { name: "addressLine2", label: "Address Line 2", type: "text" },
    { name: "countryOfResidence", label: "Country of Residence", type: "text" },
    {
      name: "stateOrTerritoryOrProvince",
      label: "State/Territory/Province",
      type: "text",
    },
    { name: "townOrCity", label: "Town/City", type: "text" },
    { name: "postalCode", label: "Postal Code", type: "text" },
    { name: "landlineNumber", label: "Landline Number", type: "text" },
    { name: "mobileNumber", label: "Mobile Number", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "password", label: "Password", type: "password" },
    // Add any additional fields here in the same format
  ];
  return fieldConfig;
};
