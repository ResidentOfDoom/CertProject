import { formatAsISO } from "./formatAsISO";

export const createSignupPayload = (data) => ({
  firstName: data.get("firstName"),
  middleName: data.get("middleName"),
  lastName: data.get("lastName"),
  gender: data.get("gender"),
  nativeLanguage: data.get("nativeLanguage"),
  birthDate: formatAsISO(data.get("birthDate")),
  photoIDType: data.get("photoIDType"),
  photoIDNumber: data.get("photoIDNumber"),
  photoIDIssueDate: formatAsISO(data.get("photoIDIssueDate")),
  email: data.get("email"),
  address: data.get("address"),
  addressLine2: data.get("addressLine2"),
  countryOfResidence: data.get("countryOfResidence"),
  stateOrTerritoryOrProvince: data.get("stateOrTerritoryOrProvince"),
  townOrCity: data.get("townOrCity"),
  postalCode: data.get("postalCode"),
  landlineNumber: data.get("landlineNumber"),
  mobileNumber: data.get("mobileNumber"),
  password: data.get("password"),
});
