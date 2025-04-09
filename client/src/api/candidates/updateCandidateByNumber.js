import { instance as axios } from "api/axios";

export const updateCandidateByNumber = async (candidateNumber, payload) => {
  const url = `Admins/updateCandidate/${candidateNumber}`;
  try {
    const response = await axios.put(url, payload);
    return response.data; // Assuming the response data contains the candidate details
  } catch (error) {
    console.error("Error pipi", error);
    throw error; // Re-throw the error to handle it in the calling function
  }
};
