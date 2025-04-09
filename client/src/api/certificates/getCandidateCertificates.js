import { instance as axios } from "api/axios";

export const getCandidateCertificates = async (
  certificateType,
  currentUser
) => {
  if (currentUser?.candidateNumber) {
    const url = `/CandidateCertificates/${certificateType}/${currentUser.candidateNumber}`;

    try {
      const response = await axios.get(url);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Error fetching candidates obtained certificates", error);
      // Optionally return a default value or re-throw the error
      throw error;
    }
  } else {
    // Handle the case where there is no current user or candidate number
    console.error("No current user or candidate number found");
    return Promise.resolve([]); // or however you want to handle this scenario
  }
};
