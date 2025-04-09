import { instance as axios } from "api/axios";

export const getCandidates = async () => {
  const url = "Admins/getCandidates";
  try {
    const response = await axios.get(url);
    // Map over the array and exclude the $id property from each object
    const candidatesWithoutId = response.data.$values.map(
      ({ $id, ...rest }) => rest
    );
    return candidatesWithoutId;
  } catch (error) {
    console.error("Error fetching candidates:", error);
    throw error;
  }
};
