import { instance as axios } from "api/axios";

export const updateCertificateByTitle = async (certificate, payload) => {
  const titleForUrl = certificate.title;

  try {
    const url = `Certificates/${titleForUrl}`;
    const response = await axios.put(url, payload);

    if (response.status === 200) {
      console.log("Certificate updated successfully");
      // Additional success handling
    } else {
      console.error("Failed to update certificate with non-200 response");
    }
  } catch (error) {
    console.error("Error in UPDATE request:", error);
  }
};
