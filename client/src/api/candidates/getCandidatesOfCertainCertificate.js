import { instance as axios } from "api/axios";

export const getCandidatesOfCertainCertificate = async (certificateTitle) => {
  const url = `CandidateCertificates/Certificates/${certificateTitle}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // You might want to handle this error properly.
  }
};
