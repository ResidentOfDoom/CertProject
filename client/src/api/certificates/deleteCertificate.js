import { instance as axios } from "api/axios";

export const deleteCertificate = async (certificate) => {
  const titleForUrl = encodeURIComponent(certificate.title);

  try {
    const url = `Certificates/${titleForUrl}`;
    const response = await axios.delete(url);

    if (response.status === 200) {
      console.log("Certificate deleted successfully");
      // Additional success handling
    } else {
      console.error("Failed to delete certificate with non-200 response");
    }
  } catch (error) {
    console.error("Error in DELETE request:", error);
    // Error handling
  }
};
