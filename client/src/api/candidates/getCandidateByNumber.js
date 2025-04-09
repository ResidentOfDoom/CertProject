import { instance as axios } from "api/axios";

export const getCandidateByNumber = async (candidateNumber) => {
  const url = `Admins/admin/getCandidateByNumber/${candidateNumber}`;
  try {
    const response = await axios.get(url);
    return response.data; // Assuming the response data contains the candidate details
  } catch (error) {
    console.error("Error ", error);
    throw error; // Re-throw the error to handle it in the calling function
  }
};
