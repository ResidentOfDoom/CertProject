import { instance as axios } from "api/axios";

export const createCertificate = async (certificateData) => {
  console.log("Received data for saving:", certificateData); // Log to verify data structure
  try {
    const response = await axios.post("Certificates", certificateData);
    if (response.status === 200) {
      console.log("Certificate added successfully");
    }
  } catch (error) {
    console.error("Error adding certificate:", error);
  }
};
