import { instance as axios } from "../axios";

export const buyCertificate = async (payload) => {
  await axios
    .post("CandidateCertificates", payload)
    .catch((error) => console.error("Certificate already bought", error));
};
