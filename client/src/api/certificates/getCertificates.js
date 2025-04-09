import { instance as axios } from "../axios";

export const getCertificates = () =>
  axios("Certificates")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching certificates:", error);
    });
